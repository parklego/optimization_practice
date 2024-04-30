import { CSSProperties } from "react";
import { Colors, colors } from "../../styles/colors";
import { Typography, typographyMap } from "../../styles/typograph";
import styled from "@emotion/styled";

interface TextProps {
  typograph?: Typography;
  color?: Colors;
  display?: CSSProperties["display"];
  textAlign?: CSSProperties["textAlign"];
  fontWeight?: CSSProperties["fontWeight"];
  bold?: boolean;
}

const Text = styled.span<TextProps>(
  ({ color = "black", display, textAlign, fontWeight, bold }) => ({
    color: colors[color],
    display,
    textAlign,
    fontWeight: bold ? "bold" : fontWeight,
  }),
  ({ typograph = "t5" }) => typographyMap[typograph]
);

export default Text;
