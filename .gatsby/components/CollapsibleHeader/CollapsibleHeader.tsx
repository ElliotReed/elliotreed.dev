import * as React from "react";

import classnames from "classnames";

import * as styles from "./collapsible-header.module.scss";

function getCollapseClass(shouldCollapse: boolean | null) {
  if (shouldCollapse == null) return;
  if (shouldCollapse) {
    return styles.collapse;
  }
  return styles.expand;
}

interface CollapsibleHeaderProps {
  className?: object,
  children: React.ReactNode,
}

export default function CollapsibleHeader({
  className, children }: Readonly<CollapsibleHeaderProps>) {
  const [headerHeight, setHeaderHeight] = React.useState(0);
  const [scrollState, setScrollState] = React.useState(0);
  const [isCollapsed, setisCollapsed] = React.useState<boolean | null>(null)
  const [collapseClass, setCollapseClass] = React.useState<object | null>(null)
  let headerRef = React.useRef<HTMLDivElement>(null);
  let spacerRef = React.useRef<HTMLDivElement>(null);

  function homeAction() {
    return
  }

  function downAction() {
    setisCollapsed(true)
  }

  function upAction() {
    setisCollapsed(false)
  }

  function getScrollTop() {
    return window.scrollY;
  };

  React.useEffect(() => {
    setCollapseClass(getCollapseClass(isCollapsed))
  }, [isCollapsed])

  React.useEffect(() => {
    const scrollDetect = (
      homeAction: () => void,
      downAction: () => void,
      upAction: () => void) => {
      const currentScrollPosition = getScrollTop();
      if (getScrollTop() === 0) {
        homeAction();
      } else if (currentScrollPosition > scrollState) {
        downAction();
      } else {
        upAction();
      }
      setScrollState(getScrollTop());
    };

    window.addEventListener("scroll", function () {
      scrollDetect(homeAction, downAction, upAction);
    })

    return () => {
      window.removeEventListener("scroll", function () {
        scrollDetect(homeAction, downAction, upAction);
      })
    }
  }, [scrollState]);

  React.useEffect(() => {
    if (headerRef.current === null) return
    if (spacerRef.current === null) return
    const heightOfHeader = headerRef.current.offsetHeight
    setHeaderHeight(heightOfHeader)
    spacerRef.current.style.height = `${headerHeight}px`;
  }, [headerHeight]);

  return (
    <>
      <header
        className={classnames(
          styles.collapsibleHeader, collapseClass, className,
        )}
        ref={headerRef}
      >
        {children}
      </header>

      <div ref={spacerRef}></div>
    </>
  )
}