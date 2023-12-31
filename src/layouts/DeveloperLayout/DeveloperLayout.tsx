import React from "react";

import { DeveloperNavbar } from "../Navbars";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";

import * as styles from "../layout.module.scss";

const DeveloperLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  let type = "developer"

  return (
    <div className={styles.container}>
      <SiteHeader type={type}>
        <DeveloperNavbar />
      </SiteHeader>
      <div className={styles.content}>
        {children}
      </div>
      <SiteFooter type={type} />
    </div>
  );
}

export default DeveloperLayout
