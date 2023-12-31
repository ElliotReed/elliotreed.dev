import * as React from "react";

import * as styles from "./portfolio-list.module.scss";

interface PortfolioListProps {
  children: React.ReactNode
}

export default function PortfolioList({ children }: Readonly<PortfolioListProps>) {
  return (
    <ul className={styles.portfolioList}>
      {children}
    </ul>
  );
}