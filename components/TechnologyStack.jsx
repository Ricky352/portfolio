import styled from "styled-components";

import { device } from "./Device";
import { TechStack } from "../constants/tech_stack";

const StyledImage = styled.img`
  height: 30px;
  width: auto;

  @media ${device.tablet} {
    height: 50px;
  }
`;

export function TechnologyStack() {
  return (
    <>
      {TechStack.map((tech) => (
        <StyledImage src={tech.url} alt={tech.alt} key={tech.id} />
      ))}
    </>
  );
}
