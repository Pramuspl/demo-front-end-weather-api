import styled from "styled-components";

export const AppContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary()};
  display: flex;
  min-height: 100vh;
  width: 100%;
`;
