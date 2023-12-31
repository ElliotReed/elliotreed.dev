import React from "react";

import * as styles from "./paragraph.module.scss";

type Paragraph = {
  children: React.ReactNode,
}

export default function Paragraph({ children }: Readonly<Paragraph>) {
  return (
    <p className={styles.p}>{children}</p>
  )
}