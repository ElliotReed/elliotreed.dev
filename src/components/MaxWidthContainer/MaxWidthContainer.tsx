import React from "react"

import * as styles from "./max-width-container.module.scss"

export default function MaxWidthContainer({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.maxWidthContainer}>
      {children}
    </div>
  );
}

