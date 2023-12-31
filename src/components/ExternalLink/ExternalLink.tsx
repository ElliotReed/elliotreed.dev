import React from "react";

import * as styles from "./external-link.module.scss";

interface ExternalLinkProps {
  to: string,
  children: React.ReactNode,
  target?: "_self" | "_blank",
}

export default function ExternalLink({ to, target = "_blank", children }: Readonly<ExternalLinkProps>) {
  return (
    <a
      className={styles.externalLink}
      href={to}
      target={target}
    >
      {children}
    </a>
  );
}