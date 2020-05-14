import styled from "styled-components";

export const MainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  overflow: hidden;
`;

export const SearchContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 30px 0;
  @media (min-width: ${({ theme }) => theme.desktopWidth}) {
    width: 40%;
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.accentPrimary()};
  font-weight: bold;
`;

export const DaysContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  transition: 0.3s;
  height: 100%;
  animation: fadein linear 1s;

  @media (min-width: ${({ theme }) => theme.desktopWidth}) {
    animation: fadein 2s;
  }

  @keyframes fadein {
    from {
      opacity: 0;
      transform: translateX(100vw);
      @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        transform: translateY(100vh);
      }
    }
    to {
      opacity: 1;
      transform: translateX(0);

      @media (min-width: ${({ theme }) => theme.desktopWidth}) {
        transform: translateY(0);
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.desktopWidth}) {
    flex-direction: row;
    width: 80%;
  }
`;
