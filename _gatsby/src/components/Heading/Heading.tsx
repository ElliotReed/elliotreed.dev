import React from "react"
import classNames from "classnames";

import * as styles from "./heading.module.scss"

type Heading = {
  level?: 1 | 2 | 3 | 4 | 5 | 6,
  size?: 1 | 2 | 3 | 4 | 5 | 6 | null,
  color?: "light" | "dark" | "default",
  align?: "start" | "center" | "end",
}

export default function Heading({
  level = 4,
  size = null,
  color = "default",
  align = "start",
  children }: React.PropsWithChildren<Heading>) {
  const HeadingTag = `h${level}` as const;

  if (!size) size = level;

  let colorClass;
  switch (color) {
    case 'light':
      colorClass = styles.clrLight;
      break;
    case 'dark':
      colorClass = styles.clrDark;
      break;
    default:
      colorClass = styles.clrDefault;
      break;
  }

  let alignmentClass;
  switch (align) {
    case 'center':
      alignmentClass = styles.center;
      break;
    case 'end':
      alignmentClass = styles.end;
      break;
    default:
      alignmentClass = styles.start
  }

  const headingClass = styles[`heading${size}`]

  return (
    <HeadingTag
      className={classNames(
        headingClass,
        colorClass,
        alignmentClass
      )}
    >{children}
    </HeadingTag>
  )
}