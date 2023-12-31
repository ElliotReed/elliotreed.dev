import React from "react"
import { HeadFC } from 'gatsby'

import ContactForm from "../../components/ContactForm"
import { Seo } from "../../components/SEO/Seo"
import MaxWidthContainer from "../../components/MaxWidthContainer/MaxWidthContainer"

export default function ContactPage() {
  return (
    <div>
      <MaxWidthContainer>
        <ContactForm type="developer" />
      </MaxWidthContainer>
    </div>
  )
}

export const Head: HeadFC<string> = () => (
  <Seo title="Developer | Contact" />
)