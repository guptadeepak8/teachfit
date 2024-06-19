import React, { useState } from "react";
import { useForm } from "react-hook-form";


export default function JobForm() {
  const { register, handleSubmit, getValues } = useForm();
  const [step, setStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    yearsofexp: "",
    socialLinks: {},
    skills: [],
    languages: [],
  });

  const [links, setLinks] = useState({
    facebook: "",
    twitter: "",
    linkedin: "",
  });
  const [currentSkill, setCurrentSkill] = useState("");
  const [lang, setLang] = useState("");
  const [photo, setPhoto] = useState(null);
  const [education, setEducation] = useState([
    {
      id: 1,
      institute: "",
      degree: "",
      cgpa: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      saved: false,
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: 1,
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      saved: false,
    },
  ]);
  const [achivement, setAchivement] = useState([
    {
      id: 1,
      institute: "",
      award: "",
      description: "",
    },
  ]);

  const [deliveryMode, setDeliveryMode] = useState("");

  const handleDeliveryModeChange = (event) => {
    setDeliveryMode(event.target.value);
  };
  // skillfunction

  const handleSkillChange = (event) => {
    setCurrentSkill(event.target.value);
  };

  const handleSkillKeyPress = (event) => {
    if (event.key === " ") {
      setPersonalInfo({
        ...personalInfo,
        skills: [...personalInfo.skills, currentSkill.trim()],
      }),
        setCurrentSkill("");
    }
  };

  const handleRemoveSkill = (index) => {
    const newSkills = personalInfo.skills.filter((skill, i) => i !== index);
    setPersonalInfo({ ...personalInfo, skills: newSkills });
  };

  //langauefunction
  const handleLanguageChange = (event) => {
    setLang(event.target.value);
  };

  const handleLanguageKeyPress = (event) => {
    if (event.key === " ") {
      setPersonalInfo({
        ...personalInfo,
        languages: [...personalInfo.languages, lang.trim()],
      }),
        setLang("");
    }
  };

  const handleRemoveLanguage = (index) => {
    const newlanguage = personalInfo.languages.filter((lang, i) => i !== index);
    setPersonalInfo({ ...personalInfo, languages: newlanguage });
  };

  // education function
  const handleEduInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...education];
    console.log(list);
    list[index][name] = value;
    setEducation(list);
  };

  const handleEduAddClick = () => {
    setEducation([
      ...education,
      {
        id: education.length + 1,
        institute: "",
        degree: "",
        cgpa: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
        saved: false,
      },
    ]);
  };

  const handleSaveEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation[index].saved = true;
    setEducation(updatedEducation);
  };

  const handleRemoveEducation = (index) => {
    const filteredEducation = education.filter((edu, i) => i !== index);
    setEducation(filteredEducation);
  };

  //experice function

  const handleExpAddClick = () => {
    setExperience([
      ...experience,
      {
        id: experience.length + 1,
        institute: "",
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        responsibilities: "",
        saved: false,
      },
    ]);
  };

  const handleExpInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...experience];
    list[index][name] = value;
    setExperience(list);
  };

  const handleSaveExperience = (index) => {
    const updatedExperience = [...experience];
    updatedExperience[index].saved = true;
    setEducation(updatedExperience);
  };
  const handleRemoveExperience = (index) => {
    const filteredExperience = experience.filter((edu, i) => i !== index);
    setEducation(filteredExperience);
  };

  //achivement function
  const handleRemoveAchivement = (index) => {
    const filteredAchivement = education.filter((edu, i) => i !== index);
    setAchivement(filteredAchivement);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };
  const handleInputLinksChange = (event) => {
    const { name, value } = event.target;
    setLinks((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-10 py-5 ">
      <h2 className="text-2xl font-bold mb-4 ">Profile</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-2 border-slate-600 rounded-lg px-10 py-10"
      >
        {/* About Section  */}

        <FormCard>
          <SectionHeading
            title="Personal Information"
            desc="Tell us about yourself so Organizations know who you are."
          />

          <FormContainer>
            <Input
              type="text"
              label="Full Name*"
              name="fullName"
              placeholder="Full Name"
              value={personalInfo.fullName}
              onChange={(e) => handleInputChange(e)}
            />

            <Input
              type="email"
              label="Email*"
              name="email"
              placeholder="Email"
              value={personalInfo.email}
              onChange={(e) => handleInputChange(e)}
            />

            <Input
              type="tel"
              label="Phone*"
              name="phone"
              placeholder="Phone"
              value={personalInfo.phone}
              onChange={(e) => handleInputChange(e)}
            />
            <Input
              type="tel"
              label="Experience in Years*"
              name="phone"
              placeholder="Phone"
              value={personalInfo.phone}
              onChange={(e) => handleInputChange(e)}
            />
           
            <Input
              type="text"
              label="Address*"
              name="address"
              placeholder="Where are you based?*"
              value={personalInfo.address}
              onChange={(e) => handleInputChange(e)}
            />
            <div>
              <label htmlFor="" className="font-semibold text-lg">
                Your Bio
              </label>
              <textarea
                placeholder="Tell us about yourself"
               className="w-full px-3 py-2 border rounded-lg border-slate-400"
                rows="4"
                value={personalInfo.summary}
                onChange={(e) => handleInputChange(e)}
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
            <Input
              type="text"
              label="Facebook"
              name="facebook"
              placeholder="Facebook Url"
              value={links.facebook}
              onChange={(e) => handleInputLinksChange(e)}
            />
            <Input
              type="text"
              label="Twitter"
              name="twitter"
              placeholder="Twitter Url"
              value={links.twitter}
              onChange={(e) => handleInputLinksChange(e)}
            />
            <Input
              type="text"
              name="linkedin"
              label="LinkedIn"
              placeholder="LinkedIn Url"
              value={links.linkedin}
              onChange={(e) => handleInputLinksChange(e)}
            />
          </FormContainer>
        </FormCard>

        {/* Skills */}

        <FormCard>
          <SectionHeading title="Skills" />
          <FormContainer>
            <div className="flex flex-wrap items-center gap-2">
              {personalInfo?.skills.map((skill, index) => (
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
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex gap-5 flex-col bg-slate-200 px-10 py-8 rounded-lg"
              >
                {edu.saved ? (
                  <div className="flex flex-row justify-between">
                    <div className="flex gap-5 items-center">
                      <div className="w-16 h-16 object-cover rounded-sm  bg-slate-400 " />
                      <div className="flex flex-col">
                        <span className="font-medium">{edu.institute}</span>
                        <span>{edu.degree}</span>
                        <span>{edu.cgpa} %</span>
                        <span>{edu.fieldOfStudy}</span>
                        <span>
                          {edu.startDate} - {edu.endDate}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveEducation(index)}
                      className=" text-red-500 hover:text-red-700 focus:outline-none"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <>
                    <Input
                      type="text"
                      label="Institute Name"
                      placeholder="University of Mumbai"
                      name="institute"
                      value={edu.institute}
                      onChange={(event) => handleEduInputChange(index, event)}
                    />

                    <Input
                      type="text"
                      label="Percentage"
                      placeholder="CGPA or %"
                      name="cgpa"
                      value={edu.cgpa}
                      onChange={(e) => handleEduInputChange(index, e)}
                    />
                    <div>
                    <label htmlFor="" className="font-semibold text-lg">Select Exam</label>
                    <select
                      name="level"
                      value={edu.level}
                      onChange={(event) => handleEduInputChange(index, event)}
                      className="w-full px-3 py-2 border rounded-lg border-slate-400"
                    >
                      <option value="">Select Exam</option>
                      <option value="Secondary">Secondary</option>
                      <option value="Degree">Degree</option>
                      <option value="Graduate">Graduate</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Master">Master</option>
                      <option value="PHD">PHD</option>
                    </select>
                    </div>

                    <Input
                      type="text"
                      label="Subjects"
                      placeholder="Maths, Science, English"
                      name="fieldOfStudy"
                      value={edu.fieldOfStudy}
                      onChange={(e) => handleEduInputChange(index, e)}
                    />
                    <Input
                      type="text"
                      label="Medium"
                      placeholder="English"
                      name="fieldOfStudy"
                      value={edu.fieldOfStudy}
                      onChange={(e) => handleEduInputChange(index, e)}
                    />

                    <Input
                      type="date"
                      label="Start Date"
                      placeholder="Start Date"
                      name="startDate"
                      value={edu.startDate}
                      onChange={(e) => handleEduInputChange(index, e)}
                    />

                    <Input
                      type="date"
                      placeholder="End Date"
                      label="End Date"
                      name="endDate"
                      value={edu.endDate}
                      onChange={(e) => handleEduInputChange(index, e)}
                    />
                    <div className="flex gap-4 items-center">
                      <input
                        type="radio"
                        id="regular"
                        name="deliveryMode"
                        value="Regular"
                        checked={deliveryMode === "Regular"}
                        onChange={handleDeliveryModeChange}
                        className="form-radio h-5 w-5 text-blue-600"
                      />
                      <label
                        htmlFor="regular"
                        className="font-semibold text-lg"
                      >
                        Regular
                      </label>
                      <input
                        type="radio"
                        id="distance"
                        name="deliveryMode"
                        value="Distance"
                        checked={deliveryMode === "Distance"}
                        onChange={handleDeliveryModeChange}
                        className="form-radio h-5 w-5 text-blue-600"
                      />
                      <label
                        htmlFor="distance"
                        className="font-semibold text-lg"
                      >
                        Distance
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleSaveEducation(index)}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                      >
                        Save
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}

            <div className="text-end">
              <button
                type="submit"
                onClick={handleEduAddClick}
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
            {experience.map((exp, index) => (
              <div
                key={index}
                className="flex gap-5 flex-col bg-slate-200 px-10 py-8 rounded-lg"
              >
                {exp.saved ? (
                  <div className="flex flex-row justify-between">
                    <div className="flex gap-5 items-center">
                      <div className="w-16 h-16 object-cover rounded-sm  bg-slate-400 " />
                      <div className="flex flex-col">
                        <span className="font-medium">{exp.company}</span>
                        <span>{exp.position}</span>

                        <span>
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveExperience(index)}
                      className=" text-red-500 hover:text-red-700 focus:outline-none"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <>
                    <Input
                      type="text"
                      label="Name of Institution"
                      placeholder="Institution"
                      name="company"
                      value={exp.company}
                      onChange={(e) => handleExpInputChange(index, e)}
                    />

                    <Input
                      type="text"
                      label="Subject & Class"
                      placeholder="Subject & Class taught"
                      name="position"
                      value={exp.position}
                      onChange={(e) => handleExpInputChange(index, e)}
                    />

                    <Input
                      type="date"
                      label="Start Date"
                      placeholder="Start Date"
                      name="startDate"
                      value={exp.startDate}
                      onChange={(e) => handleExpInputChange(index, e)}
                    />

                    <Input
                      type="date"
                      label="End Date"
                      placeholder="End Date"
                      name="endDate"
                      value={exp.endDate}
                      onChange={(e) => handleExpInputChange(index, e)}
                    />

                    <div className="col-span-3">
                      <label className="block text-gray-700">
                        Responsibilities
                      </label>
                      <textarea
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                        rows="3"
                        name="responsibilities"
                        value={exp.responsibilities}
                        onChange={(e) => handleExpInputChange(index, e)}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleSaveExperience(index)}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                      >
                        Save
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
            <div className="text-end">
              <button
                type="submit"
                onClick={handleExpAddClick}
                className="bg-green-500 text-white px-4 py-2 rounded w-36"
              >
                Add Education
              </button>
            </div>
          </FormContainer>
        </FormCard>

        <div className="flex justify-end">
          <button type="submit" className="border-2 border-slate-800 p-2 rounded">
            Update Changes
          </button>
        </div>
      </form>
    </div>
  );
}

function FormCard({ children }) {
  return (
    <div className="flex flex-row py-1 px-6 gap-16 mt-4 mb-3 justify-center">
      {children}
    </div>
  );
}

function FormContainer({ children }) {
  return <div className="flex gap-5 flex-col w-3/4 px-4 py-2">{children}</div>;
}

function SectionHeading({ title, desc }) {
  return (
    <div className="w-1/4">
      <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
      {desc && <h4 className="text-md">({desc})</h4>}
    </div>
  );
}

function Input({ type, name, value, onChange, index, placeholder, label }) {
  return (
    <div className="">
      {label && (
        <label htmlFor={name} className="text-lg font-semibold mb-3">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-lg border-slate-400"
      />
    </div>
  );
}
