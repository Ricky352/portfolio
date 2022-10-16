import styled from "styled-components";
import Image from "next/image";

const Copyright = styled.p`
  color: white;
  margin-top: 12px;
  font-family: "Rajdhani", sans-serif;
  font-size: 12px;
`;

const FooterContainer = styled.div`
  align-items: center;
  bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 20px;
  width: 100%;
  margin-top: auto;
`;

const Line = styled.div`
  background-color: white;
  height: 1px;
  margin-top: 4px;
  width: 90vw;
`;

const Link = styled.a`
  &:hover {
    filter: brightness(1.25);
    transform: scale(1.05);
  }
`;

const SocialContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export function Footer() {
  return (
    <>
      <FooterContainer>
        <SocialContainer>
          <Link
            href="https://www.linkedin.com/in/ricardo-lopes4997/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={40}
              height={40}
            ></Image>
          </Link>
          <Link href="">
            <Image
              src="/github-logo.png"
              alt="LinkedIn"
              width={36}
              height={36}
            ></Image>
          </Link>
          <Link href="https://stackoverflow.com/users/20256898/ricky352">
            <Image
              src="/stackoverflow.png"
              alt="Stackoverflow"
              width={40}
              height={40}
            ></Image>
          </Link>
        </SocialContainer>
        <Line />
        <Copyright>
          © Copyright 2022 - Developed by Ricardo Lopes. All rights reserved.
        </Copyright>
      </FooterContainer>
    </>
  );
}
