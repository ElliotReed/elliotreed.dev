import React from 'react';

import * as styles from './ButtonGroup.module.scss';

export default function ButtonGroup({ children }: React.PropsWithChildren) {
  return (
    <div className={styles.buttonGroup}>
      {children}
    </div>
  )
}