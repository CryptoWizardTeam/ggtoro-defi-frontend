import { styled, DefaultTheme } from "styled-components";
import { InputProps, scales } from "./types";

interface StyledInputProps extends InputProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success
 */
const getBoxShadow = ({ isSuccess = false, isWarning = false, theme }: StyledInputProps) => {
  if (isWarning) {
    return theme.shadows.warning;
  }

  if (isSuccess) {
    return theme.shadows.success;
  }

  return theme.shadows.inset;
};

const getHeight = ({ scale = scales.MD }: StyledInputProps) => {
  switch (scale) {
    case scales.SM:
      return "32px";
    case scales.LG:
      return "48px";
    case scales.MD:
    default:
      return "40px";
  }
};

const Input = styled("input").withConfig({
  shouldForwardProp: (props) => !["scale", "isSuccess", "isWarning"].includes(props),
})<InputProps>`
  background-color: transparent; //${({ theme }) => theme.colors.input};
  // border-radius: 16px;
  // box-shadow: ${getBoxShadow};
  color: ${({ theme }) => theme.colors.text};
  display: block;
  font-size: 14px;
  font-weight: 300;
  height: ${getHeight};
  outline: 0;
  padding: 0 16px;
  width: 100%;
  border: 0;
  // border: 1px solid ${({ theme }) => theme.colors.inputSecondary};

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.backgroundDisabled};
    box-shadow: none;
    color: rgba(255, 255, 255, 0.4);
    cursor: not-allowed;
  }

  /* &:focus:not(:disabled) {
    box-shadow: ${({ theme, isWarning, isSuccess }) => {
    if (isWarning) {
      return theme.shadows.warning;
    }

    if (isSuccess) {
      return theme.shadows.success;
    }
    return theme.shadows.focus;
  }};
  } */
`;

Input.defaultProps = {
  scale: scales.MD,
  isSuccess: false,
  isWarning: false,
};

export default Input;
