import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

import * as styles from "./go-to-detail-link.module.scss";

interface GoToDetailLinkProps {
  children: React.ReactNode
  to: string
}

export default function GoToDetailLink({ children, to }: Readonly<GoToDetailLinkProps>) {
  return (
    <Link
      to={to}
      className={styles.goToDetailLink}
    >
      {children} <FontAwesomeIcon icon={faChevronRight} />
    </Link>
  );
}