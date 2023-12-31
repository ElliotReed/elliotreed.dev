import React from "react";

import { Link } from "gatsby";
import NavigationHeaderLink from "../../components/NavigationHeaderLink/NavigationHeaderLink";

import * as styles from "./navbars.module.scss";

export default function DesignNavbar() {
  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <NavigationHeaderLink to="/design/colors">
            Colors
          </NavigationHeaderLink>
        </li>
        <li>
          <NavigationHeaderLink to="/design/typography">
            Typography
          </NavigationHeaderLink>
        </li>
      </ul>
    </nav>
  )
}