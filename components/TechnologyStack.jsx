import styled from "styled-components";

import { TechStack } from "../constants/tech_stack";

const StyledImage = styled.img`
  height: 30px;
  width: auto;
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
