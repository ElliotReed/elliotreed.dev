import styles from "./back-button.module.scss";
import classNames from "classnames";

type BackButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    addedStyles?: string
}

export default function BackButton({ addedStyles, ...rest }: BackButtonProps) {
    return (
        <button
            className={classNames(styles["back-button"], addedStyles)}
            onClick={() => history.back()}
            {...rest}
        >
            ← Go Back
        </button>
    );
}
