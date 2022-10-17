import styled from "styled-components";
import { device } from "./Device";

const Navbar = styled.div`
  align-items: center;
  color: white;
  display: flex;
  justify-content: space-around;
  min-height: 80px;

  @media ${device.tablet} {
    justify-content: space-between;
    min-height: 92px;

  }
`;

const Name = styled.div`
  color: white;
  font-size: 20px;
  font-family: "Rajdhani", sans-serif;
  font-weight: 400;

  @media ${device.tablet} {
    font-size: 32px;
  }
`;

const Title = styled.a`
  color: white;
  text-decoration: none;
  font-family: "Rajdhani", sans-serif;
  font-size: 20px;
  font-weight: 400;
  &:hover {
    transform: scale(1.05);
  }

  @media ${device.tablet} {
    font-size: 32px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

export function Header() {
  return (
    <>
      <Navbar>
        <StyledContainer>
          <Name>Ricardo</Name>
          <Name>Lopes</Name>
        </StyledContainer>
        <Title href="/">Home</Title>
        <Title href="about">About</Title>
        <Title href="projects">Projects</Title>
      </Navbar>
    </>
  );
}
