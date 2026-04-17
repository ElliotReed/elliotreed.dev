import classNames from "classnames";
import styles from "./copyright.module.scss";

interface CopyrightProps {
    originYear: string,
    holder: string,
    link: {
        to?: string | undefined,
        target?: string | undefined
    }
    addedStyles?: string
}

export default function Copyright({ originYear, holder, link, addedStyles, ...rest }: CopyrightProps) {
    const date = new Date()
    const year = date.getFullYear().toString();
    const copyright = `${originYear === year ? originYear : originYear + '-' + year}`;
    const target = link.target ? link.target : '_self';
    const content = link.to ? (<a href={link.to} target={target} rel={link.target === "_blank" ? "noopener noreferrer" : ""}>{holder}</a>) : holder;

    return (
        <p className={classNames(styles.copyright, addedStyles)} {...rest}>
            Copyright &copy; {copyright} {content}
        </p>
    );
}


