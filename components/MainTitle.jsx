import styled, { keyframes } from "styled-components";

const Animation = keyframes`
  to {
    background-position: 200% center;
  }
`;

const Title = styled.h1`
  align-items: center;
  animation: ${Animation} 6s linear infinite;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: 200% auto;
  color: #fff;
  display: flex;
  font-family: "Rajdhani", sans-serif;
  font-size: 36px;
  font-weight: 600;
  justify-content: center;
  line-height: 48px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 100%;
`;

export function MainTitle(props) {
  return (
    <>
      <Title>{props.title}</Title>
    </>
  );
}
