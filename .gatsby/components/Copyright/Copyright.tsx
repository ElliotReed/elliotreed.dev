import React from "react"

import * as styles from "./copyright.module.scss"

interface CopyrightProps {
  originYear: string,
  holder: string | React.ReactElement<HTMLAnchorElement>,
}

const Copyright = ({ originYear, holder }: CopyrightProps) => {
  const date = new Date()
  const year = date.getFullYear().toString();
  const copyright = `${originYear === year ? originYear : originYear + '-' + year}`

  return (
    <p className={styles.copyright}>
      Copyright &copy; {copyright} {holder}
    </p>
  );
}

export default Copyright
