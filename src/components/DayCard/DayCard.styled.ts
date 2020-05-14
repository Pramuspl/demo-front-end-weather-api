import styled from "styled-components";

export const Time = styled.time`
  font-size: 0.8em;
  display: block;
  position: relative;
  width: 7em;
  height: 7em;
  background-color: #fff;
  border-radius: 0.6em;
  box-shadow: 0 1px 0 #bdbdbd, 0 2px 0 #fff, 0 3px 0 #bdbdbd, 0 4px 0 #fff,
    0 5px 0 #bdbdbd;
  overflow: hidden;

  * {
    display: block;
    width: 100%;
    font-size: 1em;
    font-weight: bold;
    font-style: normal;
    text-align: center;
  }

  strong {
    position: absolute;
    top: 0;
    padding: 0.4em 0;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.accentPrimary()};
    border-bottom: 1px dashed ${({ theme }) => theme.colors.accentSecondary()};
    box-shadow: 0 2px 0 ${({ theme }) => theme.colors.accentPrimary()};
  }

  em {
    position: absolute;
    bottom: 0.3em;
    color: ${({ theme }) => theme.colors.accentPrimary()};
  }

  span {
    font-size: 2.8em;
    letter-spacing: -0.05em;
    padding-top: 0.8em;
    color: #2f2f2f;
  }
`;

export const Expandable = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: 2;
`;

export const ExpandableBase = styled.div`
  background-color: ${({ theme }) => theme.colors.accentSecondary()};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
`;
export const ExpandableAdditional = styled.div`
  background-color: ${({ theme }) => theme.colors.accentSecondary()};
  overflow: hidden;
  left: 40%;
  width: 0;
  height: 100%;
  transition: width 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    padding: 2px 0;
    white-space: nowrap;
    color: #fff;
  }
`;

export const MainContainer = styled.div`
  background: ${({ theme }) => theme.colors.secondary()};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 3px solid ${({ theme }) => theme.colors.accentSecondary()};
  display: flex;
  flex-direction: column;
  height: 150px;
  margin: 10px;
  position: relative;
  width: 90%;

  @media (min-width: ${({ theme }) => theme.desktopWidth}) {
    max-width: 300px;
  }

  img {
    width: 50%;
  }

  &:hover {
    ${ExpandableAdditional} {
      width: 60%;
    }
  }
`;

export const BaseInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  width: 60%;
  z-index: 1;
`;

export const Temp = styled.strong`
  font-size: 1.2em;
  padding: 10px 5px 5px 5px;
  color: ${({ theme }) => theme.colors.secondary()};
`;

export const Description = styled.span`
  text-align: center;
`;
export const AdditionalInfoItemStyle = styled.span`
  display: flex;
  align-items: center;
  margin-left: 25px;
  svg {
    min-height: 22px;
    min-width: 22px;
    margin-right: 10px;

    path {
      fill: white;
      stroke: white;
    }
  }
`;
