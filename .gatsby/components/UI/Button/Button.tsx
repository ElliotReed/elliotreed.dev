import React from 'react';
import classNames from 'classnames';

import * as styles from './button.module.scss';

type ButtonProps = {
  readonly disabled: boolean;
  readonly orientation: "vertical" | "horizontal";
  readonly type: "button" | "submit" | "reset";
  readonly onClick?: () => void;
  readonly children: string;
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