import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import Text from "./Text";
import Flex from "./Flex";
import Button from "./Button";

interface AlertProps {
  open?: boolean;
  title: React.ReactNode;
  description?: React.ReactNode;
  buttonLabel?: string;
  onButtonClick: () => void;
}

const Dimmed = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: var(--dimmed-z-index);
`;

const AlertContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.white};
  border-radius: 8px;
  overflow: hidden;
  z-index: var(--alert-z-index);
  width: 320px;
  padding: 24px;
  box-sizing: border-box;
`;

const Alert = ({
  open,
  title,
  description,
  onButtonClick,
  buttonLabel = "확인",
}: AlertProps) => {
  if (!open) {
    return null;
  }

  return (
    <Dimmed>
      <AlertContainer>
        <Text
          typograph="t4"
          bold={true}
          display="block"
          style={{ marginBottom: 6 }}
        >
          {title}
        </Text>
        {description ? <Text typograph="t7">{description}</Text> : null}
        <Flex justify="flex-end">
          <Button
            onClick={onButtonClick}
            weak={true}
            style={{ marginTop: 12, border: "none" }}
          >
            {buttonLabel}
          </Button>
        </Flex>
      </AlertContainer>
    </Dimmed>
  );
};

export default Alert;
