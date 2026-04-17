import classNames from 'classnames';

import styles from './button.module.scss';

type ButtonProps = {
    readonly disabled?: boolean;
    readonly orientation?: "vertical" | "horizontal";
    readonly type: "button" | "submit" | "reset";
    readonly onClick?: () => void;
    readonly children: any;
    style?: string;
}

export default function Button({
    disabled = false,
    orientation = "horizontal",
    type = "button",
    children,
    onClick,
    style = undefined,
}: ButtonProps) {

    const buttonStyle = classNames(
        styles.button,
        orientation == "vertical" && styles.vertical,
        style
    )

    return (
        <button className={buttonStyle} type={type} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}