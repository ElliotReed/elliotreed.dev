import React from "react"

import styles from "./UlClean.module.scss"

export const UlClean = ({ children }) => {
  return <ul className={styles.clean}>{children}</ul>
}
