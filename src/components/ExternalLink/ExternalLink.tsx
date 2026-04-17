import React from "react";

import classNames from "classnames";

import styles from "./external-link.module.scss";

interface ExternalLinkProps {
    to: string
    children: React.ReactNode
    target?: "_self" | "_blank"
    title?: string
    addedStyles?: string
}

export default function ExternalLink({ to, target = "_blank", children, title, addedStyles, ...rest }: Readonly<ExternalLinkProps>) {
    return (
        <a
            className={classNames(styles["external-link"], addedStyles)}
            href={to}
            target={target}
            title={title ?? to}
            {...rest}
        >
            {children}
        </a>
    );
}