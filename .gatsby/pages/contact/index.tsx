import * as React from "react";
import { HeadFC } from "gatsby";

import ContactForm from "../../components/ContactForm";
import MaxWidthContainer from "../../components/MaxWidthContainer/MaxWidthContainer";
import Seo from "../../components/SEO";

export default function ContactPage() {
  return (
    <main>
      <MaxWidthContainer>
        <ContactForm type="developer" />
      </MaxWidthContainer>
    </main>
  )
}

export const Head: HeadFC<string> = () => (
  <Seo title=" Contact | Elliot Reed" />
)