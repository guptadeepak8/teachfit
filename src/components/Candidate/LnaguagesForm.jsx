import React from 'react'

export default function LnaguagesForm() {
  return (
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
  )
}
