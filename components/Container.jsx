import styled from "styled-components";

const StyledContainer = styled.div`
  align-items: ${(props) => props.align || "left"};
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  flex-wrap: wrap;
  gap: ${(props) => props.gap || ""};
  justify-content: center;
  margin: ${(props) => props.margin || "0px 0px"};
  width: ${(props) => props.width || ""};
`;

export function Container(props) {
  return (
    <>
      <StyledContainer
        align={props.align}
        direction={props.direction}
        gap={props.gap}
        margin={props.margin}
        width={props.width}
      >
        {props.children}
      </StyledContainer>
    </>
  );
}
