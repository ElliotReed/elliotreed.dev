import React, { useState, useRef, useEffect } from "react"
import classnames from "classnames"

import * as styles from "./Accordion.module.scss"

export default function Accordion(props) {
  const [active, setActive] = useState(false)
  const [height, setHeight] = useState('0px')

  const content = useRef(null)

  function toggleAccordion() {
    setActive(!active)
  }

  useEffect(() => {
    setHeight(active ? content.current.scrollHeight : '0px')
  }, [active])

  return (
    <div className={styles.section}>
      <button
        className={classnames(styles.accordion, active && styles.active)}
        onClick={toggleAccordion}
      >
        <p className={styles.title}>{props.title}</p>
        <div className={classnames(styles.icon, active &&  styles.rotate)}></div>
      </button>
      <div ref={content} className={styles.content} style={{ maxHeight: height}}>
        {props.content}
      </div>
    </div>
  )
}
