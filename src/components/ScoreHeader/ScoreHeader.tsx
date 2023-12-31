import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./score-header.module.scss";

export default function ScoreHeader() {
  return (
    <StaticImage
      className={styles.image}
      src="./score-landscape.png"
      layout="fullWidth"
      alt=""
      transformOptions={
        {
          duotone: {
            highlight: "#af9a6a",
            shadow: "#000000",
            opacity: 50,
          }
        }
      }
    />
  );
}