import React from "react";
import { Link } from "gatsby";

import * as styles from "./navigation-header-link.module.scss";

interface NavigationHeaderLink {
  to: string,
  children: React.ReactNode,
}

export default function NavigationHeaderLink({ to, children }: Readonly<NavigationHeaderLink>) {
  return (
    <Link
      to={to}
      activeClassName={styles.navigationHeaderLinkActive}
      className={styles.navigationHeaderLink}
    >
      {children}
    </Link>
  );
}