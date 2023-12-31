import React from "react"

import { ContextProviderComponent } from "../../context/Context";

import { DesignNavbar } from "../Navbars";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";

import * as styles from "../layout.module.scss"

export default function DesignLayout({ children }: Readonly<React.PropsWithChildren>) {
  let type = "developer";

  return (
    <ContextProviderComponent>
      <div className={styles.container}>
        <SiteHeader type={type}>
          <DesignNavbar />
        </SiteHeader>
        <div className={styles.content}>
          {children}
        </div>
        <SiteFooter type={type} />
      </div>
    </ContextProviderComponent>
  );
}