import { css } from "@emotion/react";

export const colorPalette = css`
  :root {
    --red: #ff0000;
    --blue: #0000ff;
    --green: #008000;
    --white: #ffffff;
    --black: #000000;
    --gray: #eeeeee;
  }
`;

export const colors = {
  red: "var(--red)",
  blue: "var(--blue)",
  green: "var(--green)",
  white: "var(--white)",
  black: "var(--black)",
  gray: "var(--gray)",
};

export type Colors = keyof typeof colors;
