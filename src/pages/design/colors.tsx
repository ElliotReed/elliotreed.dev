import React from "react"

import DesignLayout from "../../layouts/DesignLayout"

import MaxWidthContainer from "../../components/MaxWidthContainer/MaxWidthContainer";

import * as styles from "./colors.module.scss"

export default function ColorsPage() {
  const colors = [
    "light",
    "dark",
    "mainBrand",
    "darkShades",
    "lightShades",
    "error",
    "info",
    "success",
    "warning",
    "white",
    "black",
    "neutral",
  ];

  return (
    <DesignLayout>
      <MaxWidthContainer>
        <h1>Colors</h1>

        <div className={styles.colorContainer}>
          {colors.map((color, i) => (
            // <li key={i}>{color}</li>
            <React.Fragment key={color}>
              <ColorGrid color={color} />
            </React.Fragment>
          ))}
        </div>
      </MaxWidthContainer>
    </DesignLayout>
  );
}

function ColorGrid({ color }: Readonly<{ color: string }>) {
  const items = [...Array(9).keys()].map(i => (i + 1) * 100)
  return (
    <ul className={styles.ColorGrid}>
      {items.map(item => <li className={styles[`${color}${item}`]} key={`${color}-${item}`}>{color}-{item}</li>)}

    </ul>
  )
}