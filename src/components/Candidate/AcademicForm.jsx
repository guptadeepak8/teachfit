import React from 'react'

export default function AcademicForm() {
  return (
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
  )
}
