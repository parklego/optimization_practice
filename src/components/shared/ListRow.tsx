import { css } from "@emotion/react";
import Flex from "./Flex";
import Text from "./Text";

interface ListRowProps {
  left?: React.ReactNode;
  contents: React.ReactNode;
  right?: React.ReactNode;
  withArrow?: boolean;
  onClick?: () => void;
}

const ListRow = ({
  left,
  contents,
  right,
  withArrow,
  onClick,
}: ListRowProps) => {
  return (
    <Flex as="li" align="center" css={listRowContainerStyles} onClick={onClick}>
      <Flex css={listRowLeftStyles}>{left}</Flex>
      <Flex css={listRowContentStyles}>{contents}</Flex>
      <Flex>{right}</Flex>
      {withArrow ? <ArrowRight /> : null}
    </Flex>
  );
};

const listRowContainerStyles = css`
  padding: 8px 24px;
`;

const listRowLeftStyles = css`
  margin-right: 14px;
`;

const listRowContentStyles = css`
  flex: 1;
`;

const ListRowText = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <Flex direction="column">
      <Text bold>{title}</Text>
      <Text typograph="t7">{subTitle}</Text>
    </Flex>
  );
};

const ArrowRight = () => {
  return (
    <svg
      fill="none"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
};

// 컴포넌트 합성
ListRow.Texts = ListRowText;

export default ListRow;
