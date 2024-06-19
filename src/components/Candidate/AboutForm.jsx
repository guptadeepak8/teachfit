import React from 'react'

export default function AboutForm() {
  return (
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

  )
}
