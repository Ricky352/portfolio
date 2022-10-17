import styled from "styled-components";
import { device } from "./Device";

export const StyledText = styled.p`
  color: ${(props) => props.color || "white"};
  font-size: ${(props) => props.size || "16px"};
  font-family: "Rajdhani", sans-serif;
  font-weight: ${(props) => props.weight || ""};
  text-align: justify;
  margin: ${(props) => props.margin || "0px 0px"};
  width: ${(props) => props.width || ""};
  z-index: 0;

  @media ${device.tablet} {
    font-size: ${(props) => props.tabletSize || ""};
  }

  @media ${device.laptop} {
    display: ${(props) => props.displayLaptop || ""};
    font-size: ${(props) => props.laptopSize || ""};
  }
`;

export function Text(props) {
  return (
    <>
      <StyledText
        color={props.color}
        displayLaptop={props.displayLaptop}
        laptopSize={props.laptopSize}
        margin={props.margin}
        positionDesktop={props.positionDesktop}
        size={props.size}
        tabletSize={props.tabletSize}
        weight={props.weight}
        width={props.width}
      >
        {props.text}
      </StyledText>
    </>
  );
}
