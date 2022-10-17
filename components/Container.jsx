import styled from "styled-components";
import { device } from "./Device";

const StyledContainer = styled.div`
  align-items: ${(props) => props.align || "center"};
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  flex-wrap: wrap;
  gap: ${(props) => props.gap || ""};
  justify-content: center;
  margin: ${(props) => props.margin || "0px 0px"};
  width: ${(props) => props.width || ""};

  @media ${device.tablet} {
    margin: ${(props) => props.marginTablet || ""};
  }
`;

export function Container(props) {
  return (
    <>
      <StyledContainer
        align={props.align}
        direction={props.direction}
        gap={props.gap}
        margin={props.margin}
        marginTablet={props.marginTablet}
        width={props.width}
      >
        {props.children}
      </StyledContainer>
    </>
  );
}
