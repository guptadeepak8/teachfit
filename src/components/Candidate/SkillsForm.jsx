import React from 'react'

export default function SkillsForm() {
  return (
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
  )
}
