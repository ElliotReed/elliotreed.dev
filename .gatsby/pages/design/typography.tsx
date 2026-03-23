import React from "react";

import MaxWidthContainer from "../../components/MaxWidthContainer";
import Heading from "../../components/Heading/Heading";

import DesignLayout from "../../layouts/DesignLayout";

import * as styles from "./typography.module.scss";

export default function TypographyPage() {
  return (
    <DesignLayout>
      <MaxWidthContainer>
        <Heading level={1} >Typography</Heading>

        <Heading level={2}>Sizes</Heading>
        <div className={styles.headingsContainer}>
          {/* size and level are independant, level 1 is already in use */}
          <Heading level={3} size={1}>This is heading 1</Heading>
          <Heading level={3} size={2}>This is heading 2</Heading>
          <Heading level={3} size={3}>This is heading 3</Heading>
          <Heading level={3} size={4}>This is heading 4</Heading>
          <Heading level={3} size={5}>This is heading 5</Heading>
          <Heading level={3} size={6}>This is heading 6</Heading>
        </div>

        <Heading level={2}>Alignment</Heading>
        <div className={styles.alignmentContainer}>
          <Heading level={3}>Start</Heading>
          <Heading level={3} align="center">Center</Heading>
          <Heading level={3} align="end">End</Heading>
        </div>
      </MaxWidthContainer>
    </DesignLayout>
  )
}