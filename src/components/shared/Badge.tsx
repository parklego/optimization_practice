import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import Text from "../shared/Text";

interface BadgeProps {
  label: string;
}

const Badge = ({ label }: BadgeProps) => {
  return (
    <Container>
      <Text bold typograph="t7" color="white">
        {label}
      </Text>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 12px;
  background-color: ${colors.blue};
  padding: 2px 8px;
`;

export default Badge;
