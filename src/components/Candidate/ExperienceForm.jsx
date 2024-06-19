import React from 'react'

export default function ExperienceForm() {
  return (
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
  )
}
