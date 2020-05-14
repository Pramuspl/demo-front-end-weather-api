import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  margin: 5px 0;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    color: black;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
  }
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.textPrimary()};
  font-size: 16px;
  font-weight: bold;
  height: 38px;
  width: 100%;
  border: 3px solid ${({ theme }) => theme.colors.accentPrimary(0.5)};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0 10px;

  &:focus,
  &:hover {
    border: 3px solid ${({ theme }) => theme.colors.accentPrimary()};
  }
`;

export const BaseButton = styled.button`
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  margin: 5px 0;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.textPrimary()};
  padding: 10px 20px;
  transition: 0.3s linear;

  &:hover {
    opacity: 80%;
  }
`;

export const PrimaryButton = styled(BaseButton)<{ border?: boolean }>`
  background: ${({ theme }) => theme.colors.accentPrimary()};
  color: ${({ theme }) => theme.colors.secondary()};
  border: ${({ border, theme }) =>
    border ? `1px solid ${theme.colors.secondary()}` : "none"};
`;
