import React, { useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addEducation,
  addExperience,
  removeEducation,
  saveEducation,
  updatePersonalInfo,
  updateSkills,
  addAchievement,
  saveAchievement,
  saveExperience,
  removeAchievement,
  removeExperience,
  updateLanguages,
} from "../store/candidate/candidateSlice";
import FormCard from "../components/ui/FormCard";
import SectionHeading from "../components/ui/SectionHeading";
import FormContainer from "../components/ui/FormContainer";

export default function CandidateForm() {
  const { register, handleSubmit, control, getValues } = useForm();
  const dispatch = useDispatch();
  const personalInfo = useSelector((state) => state.candidateData.personalInfo);

  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEdu,
  } = useFieldArray({
    control,
    name: "education",
  });

  const {
    fields: achievementFields,
    append: appendAchievement,
    remove: removeAchieve,
  } = useFieldArray({
    control,
    name: "achievements",
  });

  const {
    fields: experienceFields,
    append: appendExperience,
    remove: removeExp,
  } = useFieldArray({
    control,
    name: "experience",
  });

  const onSaveEducation = (data, index) => {
    console.log(data);
    dispatch(saveEducation({ index, education: data.education[index] }));
  };

  const onAddEducation = () => {
    appendEducation({
      institute: "",
      degree: "",
      cgpa: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      saved: false,
    });
    dispatch(
      addEducation({
        institute: "",
        degree: "",
        cgpa: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
        saved: false,
      })
    );
  };

  const onRemoveEducation = (index) => {
    removeEdu(index);
    dispatch(removeEducation(index));
  };

  const onSaveAchievement = (data, index) => {
    dispatch(saveAchievement({ index, achievement: data.achievement[index] }));
  };

  const onAddAchievement = () => {
    appendAchievement({
      title: "",
      description: "",
      date: "",
    });
    dispatch(
      addAchievement({
        title: "",
        description: "",
        date: "",
      })
    );
  };

  const onRemoveAchievement = (index) => {
    removeAchieve(index);
    dispatch(removeAchievement(index));
  };

  const onSaveExperience = (data, index) => {
    dispatch(saveExperience({ index, experience: data.experience[index] }));
  };

  const onAddExperience = () => {
    appendExperience({
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
    });
    dispatch(
      addExperience({
        company: "",
        position: "",
        location: "",
        startDate: "",
        endDate: "",
        responsibilities: "",
      })
    );
  };

  const onRemoveExperience = (index) => {
    removeExp(index);
    dispatch(removeExperience(index));
  };

  const [links, setLinks] = useState({
    facebook: "",
    twitter: "",
    linkedin: "",
  });
  const [currentSkill, setCurrentSkill] = useState("");
  const [lang, setLang] = useState("");
  const [photo, setPhoto] = useState(null);

  // skillfunction

  const handleSkillChange = (event) => {
    setCurrentSkill(event.target.value);
  };
  
  const handleSkillKeyPress = (event) => {
    if (event.key === " ") {
      const newSkills = [...personalInfo.skills, currentSkill.trim()];
      dispatch(updateSkills(newSkills));
      setCurrentSkill("");
    }
  };
  
  const handleRemoveSkill = (index) => {
    const newSkills = personalInfo.skills.filter((skill, i) => i !== index);
    dispatch(updateSkills(newSkills));
  };

  //langauefunction
  const handleLanguageChange = (event) => {
    setLang(event.target.value);
  };

  const handleLanguageKeyPress = (event) => {
    if (event.key === " ") {
      const newLang = [...personalInfo.languages, lang.trim()];
      dispatch(updateLanguages(newLang))
        setLang("");
    }
  };

  const handleRemoveLanguage = (index) => {
    const newlanguage = personalInfo.languages.filter((lang, i) => i !== index);
    dispatch(updateLanguages(newlanguage));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-10 py-5 ">
      <h2 className="text-2xl font-bold mb-4 ">Profile</h2>
      <form
        onSubmit={handleSubmit((data) => {
          dispatch(updatePersonalInfo(data));
        })}
        className="border-2 border-slate-600 rounded-lg px-10 py-10"
      >
        {/* About Section  */}

        <FormCard>
          <SectionHeading
            title="Personal Information"
            desc="Tell us about yourself so Organizations know who you are."
          />

          <FormContainer>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              {...register("fullname")}
              className="w-full px-3 py-2 border rounded-lg border-slate-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email")}
              className="w-full px-3 py-2 border rounded-lg border-slate-400"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              {...register("phone")}
              className="w-full px-3 py-2 border rounded-lg border-slate-400"
            />

            <input
              type="text"
              name="address"
              placeholder="Where are you based?*"
              {...register("address")}
              className="w-full px-3 py-2 border rounded-lg border-slate-400"
            />
            <div>
              <label htmlFor="" className="font-semibold text-lg">
                Your Bio
              </label>
              <textarea
                placeholder="Tell us about yourself"
                className="w-full px-3 py-2 border rounded-lg border-slate-400"
                rows="4"
                {...register("bio")}
              />
            </div>
          </FormContainer>
        </FormCard>

        {/* social links */}

        <FormCard>
          <SectionHeading
            title="Social Profiles"
            desc="Where can people find you online?"
          />
          <FormContainer>
            <input
              type="text"
              name="facebook"
              placeholder="Facebook Url"
              {...register("facebook")}
              className="w-full px-3 py-2 border rounded-lg border-slate-400"
            />
            <input
              type="text"
              name="twitter"
              placeholder="Twitter Url"
              {...register("twitter")}
              className="w-full px-3 py-2 border rounded-lg border-slate-400"
            />
            <input
              type="text"
              name="linkedin"
              placeholder="LinkedIn Url"
              {...register("linkedin")}
              className="w-full px-3 py-2 border rounded-lg border-slate-400"
            />
          </FormContainer>
        </FormCard>

        {/* Skills */}

        <FormCard>
          <SectionHeading title="Skills" />
          <FormContainer>
            <div className="flex flex-wrap items-center gap-2">
              {personalInfo && personalInfo.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center px-2 py-1 border rounded-lg bg-gray-200"
                >
                  {skill}
                  <button
                    type="button"
                    className="ml-2 text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveSkill(index)}
                  >
                    &times;
                  </button>
                </div>
              ))}
              <input
                type="text"
                placeholder="Type a skill and press space"
                name="Skill"
                {...register("skills")}
                value={currentSkill}
                onChange={handleSkillChange}
                onKeyDown={handleSkillKeyPress}
               className="w-full px-3 py-2 border rounded-lg border-slate-400"
              />
            </div>
          </FormContainer>
        </FormCard> 
        {/* languages */}

        <FormCard>
          <SectionHeading title="Langauage" />
          <FormContainer>
            <div className="flex flex-wrap items-center gap-2">
              {personalInfo?.languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex items-center px-2 py-1 border rounded-lg bg-gray-200"
                >
                  {lang}
                  <button
                    type="button"
                    className="ml-2 text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveLanguage(index)}
                  >
                    &times;
                  </button>
                </div>
              ))}
              <input
                type="text"
                placeholder="Type a skill and press space"
                value={lang}
                onChange={handleLanguageChange}
                onKeyDown={handleLanguageKeyPress}
                className="w-full px-3 py-2 border rounded-lg border-slate-400"
              />
            </div>
          </FormContainer>
        </FormCard>

        {/* Academic section */}
        <FormCard>
          <SectionHeading
            title="Academic Details"
            desc="What schools have you studied at?"
          />
          <FormContainer>
            {personalInfo &&
              personalInfo.education.map((edu, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-5 flex-col bg-slate-200 px-10 py-8 rounded-lg"
                  >
                    <input
                      type="text"
                      placeholder="University of Mumbai"
                      name="institute"
                      {...register(`education.${index}.institute`)}
                    />

                    <input
                      type="text"
                      placeholder="CGPA or %"
                      name="cgpa"
                      {...register(`education.${index}.cgpa`)}
                    />

                    <div>
                      <label htmlFor="" className="font-semibold text-lg">
                        Select Exam
                      </label>
                      <Controller
                        name={`education.${index}.exam`}
                        
                        control={control}
                        
                        render={({ field }) => (
                          <select {...field} placeholder="Select Exams" >
                            <option value="" disabled>
                              Select Exams
                            </option>
                            <option value="Secondary">Secondary</option>
                            <option value="Higher">Higher</option>
                            <option value="Degree">Degree</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Master">Master</option>
                            <option value="PHD">PHD</option>
                          </select>
                        )}
                      />
                    </div>

                    <input
                      type="text"
                      placeholder="FieldOfStudy"
                      name="fieldOfStudy"
                      {...register(`education.${index}.fieldOfStudy`)}
                    />

                    <input
                      type="date"
                      placeholder="Start Date"
                      name="startDate"
                      {...register(`education.${index}.startDate`)}
                    />

                    <input
                      type="date"
                      placeholder="End Date"
                      name="endDate"
                      {...register(`education.${index}.endDate`)}
                    />

                    <div className="flex gap-4 items-center">
                      <input
                        type="radio"
                        name={`deliveryMode-${index}`}
                        value="Regular"
                        className="form-radio h-5 w-5 text-blue-600"
                        {...register(`education.${index}.deliveryMode`)}
                      />
                      <label
                        htmlFor={`regular-${index}`}
                        className="font-semibold text-lg"
                      >
                        Regular
                      </label>
                      <input
                        type="radio"
                        name={`deliveryMode-${index}`}
                        value="Distance"
                        className="form-radio h-5 w-5 text-blue-600"
                        {...register(`education.${index}.deliveryMode`)}
                      />
                      <label
                        htmlFor={`distance-${index}`}
                        className="font-semibold text-lg"
                      >
                        Distance
                      </label>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleSubmit((data) =>
                          onSaveEducation(data, index)
                        )}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={() => onRemoveEducation(index)}
                        className="text-red-500 hover:text-red-700 focus:outline-none"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}

            <div className="text-end">
              <button
                type="button"
                onClick={onAddEducation}
                className="bg-green-500 text-white px-4 py-2 rounded w-36"
              >
                Add Education
              </button>
            </div>
          </FormContainer>
        </FormCard>

        {/* Experience section */}
        <FormCard>
          <SectionHeading
            title="Experience Details"
            desc="What other positions have you held?"
          />
          <FormContainer>
            {personalInfo &&
              personalInfo.experience.map((exp, index) => (
                <div
                  key={index}
                  className="flex gap-5 flex-col bg-slate-200 px-10 py-8 rounded-lg"
                >
                      <input
                        type="text"
                        placeholder="Institution"
                        name="company"
                        {...register(`experience.${index}.company`)}
                      />

                      <input
                        type="text"
                        placeholder="Subject & Class taught"
                        name="position"
                        {...register(`experience.${index}.position`)}
                      />
                      <input
                        type="text"
                        placeholder="location"
                        name="location"
                        {...register(`experience.${index}.location`)}
                      />

                      <input
                        type="date"
                        placeholder="Start Date"
                        name="startDate"
                        {...register(`experience.${index}.startDate`)}
                      />

                      <input
                        type="date"
                        placeholder="End Date"
                        name="endDate"
                        {...register(`experience.${index}.endDate`)}
                      />

                      <div className="col-span-3">
                        <label className="block text-gray-700">
                          Responsibilities
                        </label>
                        <textarea
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                          rows="3"
                          name="responsibilities"
                          {...register(`experience.${index}.responsibilities`)}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handleSubmit((data) =>
                            onSaveExperience(data, index)
                          )}
                          className="bg-green-500 text-white px-4 py-2 rounded"
                        >
                          Save
                        </button>
                        <button
                        type="button"
                        onClick={() => onRemoveExperience(index)}
                        className="text-red-500 hover:text-red-700 focus:outline-none"
                      >
                        Remove
                      </button>
                      </div>
                   
                 
                </div>
              ))}
            <div className="text-end">
              <button
                type="submit"
                onClick={onAddExperience}
                className="bg-green-500 text-white px-4 py-2 rounded w-36"
              >
                Add Education
              </button>
            </div>
          </FormContainer>
        </FormCard>

        <div className="flex justify-end">
          <button
            type="submit"
            className="border-2 border-slate-800 p-2 rounded"
          >
            Update Changes
          </button>
        </div>
      </form>
    </div>
  );
}
