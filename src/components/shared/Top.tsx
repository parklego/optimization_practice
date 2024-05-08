import { css } from "@emotion/react";
import Flex from "./Flex";
import Text from "./Text";

interface TopProps {
  title: string;
  subTitle: string;
}

const Top = ({ title, subTitle }: TopProps) => {
  return (
    <Flex direction="column" css={containerStyles}>
      <Text bold typograph="t4">
        {title}
      </Text>
      <Text typograph="t7">{subTitle}</Text>
    </Flex>
  );
};

const containerStyles = css`
  padding: 24px;
`;

export default Top;
