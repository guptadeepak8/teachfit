import React from 'react'

export default function SocialLinksForm() {
  return (
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
  )
}
