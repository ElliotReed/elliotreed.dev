import React from 'react';
import classNames from 'classnames';

import * as styles from './button.module.scss';

type ButtonProps = {
  disabled: boolean;
  orientation: "vertical" | "horizontal";
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  children: string;
}

export default function Button({
  disabled = false,
  orientation = "horizontal",
  type = "button",
  children,
  onClick
}: ButtonProps) {

  const buttonStyle = classNames(
    styles.button,
    orientation == "vertical" && styles.vertical,
  )

  return (
    <button className={buttonStyle} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}