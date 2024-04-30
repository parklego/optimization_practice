import { css } from "@emotion/react";

export const typographyMap = {
  t1: css`
    font-size: 30px;
    line-height: 1.35;
  `,
  t2: css`
    font-size: 28px;
    line-height: 1.35;
  `,
  t3: css`
    font-size: 26px;
    line-height: 1.35;
  `,
  t4: css`
    font-size: 24px;
    line-height: 1.35;
  `,
  t5: css`
    font-size: 20px;
    line-height: 1.35;
  `,
  t6: css`
    font-size: 18px;
    line-height: 1.35;
  `,
  t7: css`
    font-size: 16px;
    line-height: 1.35;
  `,
};

export type Typography = keyof typeof typographyMap;
