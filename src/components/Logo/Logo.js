import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

import { animations } from "./LogoAnimations";

import * as logoStyle from "./Logo.module.scss";

export default function Logo({ width, mode, animation = "" }) {
  gsap.registerPlugin(MotionPathPlugin)
  const [timeline] = useState(gsap.timeline())

  let developerAspect = useRef(null)
  let musicianAspect = useRef(null)
  let logo = useRef(null)

  let developerStyle = classnames(
    logoStyle.developer,
    mode === "developer" ? logoStyle.active : logoStyle.inactive
  )
  let musicianStyle = classnames(
    logoStyle.musician,
    mode === "musician" ? logoStyle.active : logoStyle.inactive
  )

  useEffect(() => {
    switch (animation) {
      case "DEVELOPER_PAGE_DISPLAY":
        animations.developerPageDisplay(logo, developerAspect, musicianAspect, timeline)
        break
      case "SWITCH_TO_DEVELOPER":
        animations.switchToDeveloper(developerAspect, musicianAspect, timeline)
        break
      case "SWITCH_TO_MUSICIAN":
        animations.switchToMusician(developerAspect, musicianAspect, timeline)
        break
      default:
        break
    }
  }, [animation, timeline])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={logoStyle.logo}
      width={width}
      height={width}
      viewBox="0 0 200 200"
      preserveAspectRatio="none"
      ref={element => {
        logo = element
      }}
    >
      <defs>
        <filter id="shadow" x="0" y="0">
          <feDropShadow dx="3" dy="3" stdDeviation=".32" floodOpacity="0.1" />
        </filter>
      </defs>
      <title></title>
      <g
        transform="translate(68 0)"
        ref={element => {
          developerAspect = element
        }}
        className={developerStyle}
      >
        <path d="M0,3.74V0A36.89,36.89,0,0,1,15.23,5.88,41.78,41.78,0,0,1,28.81,21.27a43.25,43.25,0,0,1,4.88,20.2,86.41,86.41,0,0,1-1.88,16.67Q29.58,69.26,29.57,74.5a22.54,22.54,0,0,0,5.51,14.75A23.47,23.47,0,0,0,50,97.37v4.38a23.55,23.55,0,0,0-14.92,8.07,22.59,22.59,0,0,0-5.51,14.91q0,5.13,2.24,16.25a88,88,0,0,1,1.88,16.78,42.51,42.51,0,0,1-5.2,20.52,42.2,42.2,0,0,1-13.88,15.39A36.5,36.5,0,0,1,0,199.23v-3.75q10.4-3.09,15.32-9.78A25.67,25.67,0,0,0,20.25,170q0-5.57-2.15-16.79a85,85,0,0,1-2-16.68,37.42,37.42,0,0,1,6.81-21.23q6.81-10.1,19.71-15.56A44.63,44.63,0,0,1,23.07,84a37.69,37.69,0,0,1-6.94-21.47,86.09,86.09,0,0,1,2-16.66Q20.25,34.61,20.25,29a25.51,25.51,0,0,0-4.93-15.49Q10.4,6.74,0,3.74Z" />
      </g>
      <g
        ref={element => {
          musicianAspect = element
        }}
        className={musicianStyle}
      >
        <ellipse cx="50" cy="50" rx="22" ry="16" />
        <rect x="28" y="50" width="8" height="100" />
        <ellipse cx="150" cy="60" rx="22" ry="16" />
        <rect x="128" y="60" width="8" height="100" />

        <polygon
          points="
          28 142,
          136 158,
          136 174,
          28 158"
        />
      </g>
    </svg>
  )
}


