import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

const Input = styled.input`
  padding: 0 16px;
  font-size: 16px;
  height: 48px;
  font-weight: 500;
  border: 1px solid ${colors.gray};
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${colors.blue};
  }

  // props를 받아서 error처리를 하는 방법도 있지만 다른 방법으로
  &[aria-invalid="true"] {
    border-color: ${colors.red};
  }
`;

export default Input;
