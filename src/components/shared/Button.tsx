import { css } from "@emotion/react";
import {
  ButtonColor,
  ButtonSize,
  buttonColorMap,
  buttonColorWeakMap,
  buttonSizeMap,
} from "../../styles/button";
import styled from "@emotion/styled";

interface ButtonProps {
  color?: ButtonColor;
  size?: ButtonSize;
  weak?: boolean;
  full?: boolean;
  disabled?: boolean;
}

const Button = styled.button<ButtonProps>(
  {
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "6px",
  },
  ({ color = "primary", weak }) =>
    weak ? buttonColorWeakMap[color] : buttonColorMap[color],
  ({ size = "s" }) => buttonSizeMap[size],
  ({ full }) =>
    full
      ? css`
          display: block;
          width: 100%;
          border-radius: 0;
        `
      : undefined,

  ({ disabled }) =>
    disabled
      ? css`
          opacity: 0.2;
          cursor: not-allowed;
        `
      : undefined
);

export default Button;
