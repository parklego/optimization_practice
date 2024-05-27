import { css } from "@emotion/react";

import Button from "./Button";
import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { createPortal } from "react-dom";

interface FixBottomButtonProps {
  label: string;
  onClick?: () => void;
}

const FixBottomButton = ({ label, onClick }: FixBottomButtonProps) => {
  const $portalRoot = document.getElementById("root-portal");

  if ($portalRoot == null) {
    return null;
  }

  return createPortal(
    <Container>
      <Button size="m" full onClick={onClick} css={ButtonStyles}>
        {label}
      </Button>
    </Container>,
    $portalRoot
  );
};

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.white};
  padding: 20px 10px 8px;
`;

const ButtonStyles = css`
  border-radius: 8px;
`;

export default FixBottomButton;
