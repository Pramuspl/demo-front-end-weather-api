import React from "react";
import { StyledInput, InputContainer } from "./Inputs.styled";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
}

export const Input = ({ id, label, ...props }: InputProps) => {
  return (
    <InputContainer>
      {label && <label htmlFor={id}>{label}</label>}
      <StyledInput {...props} />
    </InputContainer>
  );
};
