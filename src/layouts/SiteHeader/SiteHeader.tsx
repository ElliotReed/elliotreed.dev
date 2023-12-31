import * as React from "react";

import { Link } from "gatsby";

import CollapsibleHeader from "../../components/CollapsibleHeader";
import { GlobalStateContext } from "../../context/GlobalContextProvider";
import Logo from "../../components/Logo";

import * as styles from "./site-header.module.scss";

function logoAnimation(type: string, mode: string) {
  let animation
  if (type !== mode) {
    if (type === "developer") {
      animation = "SWITCH_TO_DEVELOPER"
    }
    if (type === "musician") {
      animation = "SWITCH_TO_MUSICIAN"
    }
  }
  if (type === mode) {
    if (type === "developer") {
      animation = "SET_TO_DEVELOPER"
    }
    if (type === "musician") {
      animation = "SET_TO_MUSICIAN"
    }
  }

  return animation
}

function Aspect({ type }: Readonly<{ type: string }>) {
  const currentFacet = type;
  return (
    <span className={styles.aspect}>
      {currentFacet}
    </span>
  );
}

interface SiteHeaderProps {
  type: string,
  children: React.ReactNode,
}

/*
  state.mode is used to determine
  if the site context(musician | developer) has changed
  to run header animation only on new context
*/
export default function SiteHeader({ type, children }: Readonly<SiteHeaderProps>) {
  const state = React.useContext(GlobalStateContext);

  return (
    <CollapsibleHeader className={styles.header}>
      <div className={styles.navBrand}>
        <Link to="/">
          <div className={styles.logoWrapper}>
            <Logo width="2.5rem" mode={type} animation={logoAnimation(type, state.mode)} />
            <span className={styles.title}>Elliot Reed</span>
            <Aspect type={type} />
          </div>
        </Link>

      </div>
      {children}
    </CollapsibleHeader>
  )
}
