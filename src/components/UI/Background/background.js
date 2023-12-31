import React from "react"
import classNames from "classnames"

import * as backgroundStyles from "./background.module.scss"

const musicImageClasses = [
  "musicBackgroundEpiphone",
  "musicBackgroundGibson",
  "musicBackgroundManouche",
]

const devImageClasses = ["devBackground"]

const abbeyroadImageClasses = ["abbeyroadBackground"]

const pickBackground = type => {
  let sourceImages
  if (type === "musician") {
    sourceImages = musicImageClasses
  } else if (type === "developer") {
    sourceImages = devImageClasses
  } else if (type === "abbeyroad") {
    sourceImages = abbeyroadImageClasses
  }
  const index = sourceImages.length
  const randomImage = Math.floor(Math.random() * index)
  return sourceImages[randomImage]
}
const Background = ({ type }) => {
  return (
    <div
      // style={background}
      className={classNames({
        [backgroundStyles.backgroundContainer]: true,
        [backgroundStyles[`${pickBackground(type)}`]]: true,
      })}
    ></div>
  )
}

export default Background
