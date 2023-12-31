const activeFillColor = "#455D4E"
const inactiveFillColor = "#221A1D"
const lightFillColor = "#e7e1d2"
const activeOpacity = "1"
const inactiveOpacity = ".38"
const ease = "bounce"

export const animations = {
  developerPageDisplay: (logo, developerAspect, musicianAspect, timeline) => {
    timeline
      .set(musicianAspect, {
        fill: lightFillColor,
        opacity: activeOpacity,
      })
      .set(developerAspect, {
        fill: lightFillColor,
        opacity: activeOpacity,
      })
      .set(logo, { scale: 0, opacity: 0 })
      .to(logo, { duration: 0.5, rotateY: 360, repeat: 3 }, "spin-scale")
      .to(logo, { duration: 2, scale: 1, opacity: 1 }, "spin-scale")
      .to(
        developerAspect,
        {
          duration: 3,
          repeat: 0,
          repeatDelay: 0,
          motionPath: {
            path: [
              { xPercent: -75, yPercent: 0 },
              { xPercent: 75, yPercent: -0 },
              { xPercent: 0, yPercent: 0 },
            ],
          },
        },
        "spread"
      )
      .to(
        musicianAspect,
        {
          duration: 3,
          repeat: 0,
          repeatDelay: 0,
          motionPath: {
            path: [
              { xPercent: 20, yPercent: -0 },
              { xPercent: -20, yPercent: 0 },
              { xPercent: 0, yPercent: 0 },
            ],
          },
        },
        "spread"
      )
      .repeat(0)
  },

  switchToDeveloper: (developerAspect, musicianAspect, timeline) => {
    timeline
      .set(musicianAspect, {
        fill: activeFillColor,
        opacity: activeOpacity,
      })
      .set(developerAspect, {
        fill: inactiveFillColor,
        opacity: inactiveOpacity,
      })
      .to(
        musicianAspect,
        {
          x: "3.8em",
          opacity: inactiveOpacity,
          fill: inactiveFillColor,
        },
        "1st"
      )
      .to(
        developerAspect,
        {
          x: "-3.8em",
          opacity: activeOpacity,
          fill: activeFillColor,
        },
        "1st"
      )
      .to(musicianAspect, { x: 0, ease: ease }, "last")
      .to(developerAspect, { x: 68, ease: ease }, "last")
  },

  switchToMusician: (developerAspect, musicianAspect, timeline) => {
    timeline
      .set(developerAspect, {
        fill: activeFillColor,
        opacity: activeOpacity,
      })
      .set(musicianAspect, {
        fill: inactiveFillColor,
        opacity: inactiveOpacity,
      })
      .to(
        developerAspect,
        {
          x: "6.8em",
          opacity: inactiveOpacity,
          fill: inactiveFillColor,
        },
        "1st"
      )
      .to(
        musicianAspect,
        {
          x: "-3.8em",
          opacity: activeOpacity,
          fill: activeFillColor,
        },
        "1st"
      )
      .to(developerAspect, { x: 68, ease: ease }, "last")
      .to(musicianAspect, { x: 0, ease: ease }, "last")
  },
}
