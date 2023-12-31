import * as React from "react";

import NavigationHeaderLink from "../../components/NavigationHeaderLink";

import * as styles from "./navbars.module.scss";

export default function DeveloperNavbar() {
  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <NavigationHeaderLink to="/about">
            About
          </NavigationHeaderLink>
        </li>
        <li>
          <NavigationHeaderLink to="/articles">
            Articles
          </NavigationHeaderLink>
        </li>
        <li>
          <NavigationHeaderLink to="/contact">
            Contact
          </NavigationHeaderLink>
        </li>
        <li>
          <NavigationHeaderLink to="/portfolio">
            Portfolio
          </NavigationHeaderLink>
        </li>
      </ul>
    </nav>
  );
}