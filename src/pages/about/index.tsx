import React from "react";
import { HeadFC } from "gatsby";

import Heading from "../../components/Heading/Heading";
import MaxWidthContainer from "../../components/MaxWidthContainer";
import Seo from "../../components/SEO/Seo";

import * as styles from "./about.module.scss";

export default function AboutDeveloper() {
  return (
    <main className={styles.aboutMe}>
      <MaxWidthContainer>
        <Heading level={1}>About Me</Heading>
        <p>
          I'm a musician and father who fell in love with coding, starting with my
          band website. A full stack web developer, I'm intersted in all aspects
          of development. If I don't know it, I'm excited to learn it. Able to
          work with diverse teams and independently to create projects. Adaptable,
          curious and passionate about learning.
        </p>

        <h2 className={styles.heading}>Technical Skills</h2>
        <ul className={styles.skillList}>
          <li>HTML</li>
          <li>CSS, Media Queries, Bootstrap, Materialize, Foundation</li>
          <li>JavaScript, JQuery, Kotlin, PHP, Python, TypeScript</li>
          <li>Django, Django Rest Framework, Express, React, React Native, Gatsby, Graphql, Vue, Angular</li>
          <li>Postgresql, MySQL, MongoDB, Firebase, MS Access</li>
          <li>Node, AJAX, APIs, JSON, REST</li>
          <li>GIT, Github, command line, computer science fundamentals</li>
        </ul>
      </MaxWidthContainer>
    </main>
  );
}

export const Head: HeadFC = () => (
  <Seo title="About | Elliot Reed | Developer" />
)