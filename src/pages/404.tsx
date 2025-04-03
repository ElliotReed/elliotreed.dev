import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"

import Heading from "../components/Heading/Heading"
import MaxWidthContainer from "../components/MaxWidthContainer"
import Paragraph from "../components/UI/Paragraph/Paragraph"

import * as styles from "./404.module.scss";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className={styles.notFound}>
      <MaxWidthContainer>
        <Heading level={1}>Page not found</Heading>
        <Paragraph>
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code className={styles.code}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">Go home</Link>.
        </Paragraph>
      </MaxWidthContainer>
    </main >
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
