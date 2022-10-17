import styled from "styled-components";
import Image from "next/image";

import { device } from "./Device";

const Copyright = styled.p`
  color: white;
  margin-top: 12px;
  font-family: "Rajdhani", sans-serif;
  font-size: 12px;

  @media ${device.tablet} {
    font-size: 20px;
  }
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

  .responsive {
    height: 40px;
    width: 40px;
  }

  @media ${device.tablet} {
    .responsive {
      height: 48px;
      width: 48px;
    }
  }

  .responsive2 {
    height: 36px;
    width: 36px;
  }

  @media ${device.tablet} {
    .responsive2 {
      height: 40px;
      width: 40px;
    }
  }
`;

const Line = styled.div`
  background-color: white;
  height: 1px;
  margin-top: 4px;
  width: 100%;
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

  @media ${device.tablet} {
    gap: 24px;
  }
`;

export function Footer() {
  return (
    <>
      <FooterContainer>
        <SocialContainer>
          <div className="responsive">
            <Link
              href="https://www.linkedin.com/in/ricardo-lopes4997/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                layout="responsive"
                width={40}
                height={40}
              ></Image>
            </Link>
          </div>
          <div className="responsive2">
            <Link href="">
              <Image
                src="/github-logo.png"
                alt="GitHub"
                width={36}
                height={36}
                layout="responsive"
              ></Image>
            </Link>
          </div>
          <div className="responsive">
            <Link href="https://stackoverflow.com/users/20256898/ricky352">
              <Image
                src="/stackoverflow.png"
                alt="Stackoverflow"
                width={40}
                height={40}
                layout="responsive"
              ></Image>
            </Link>
          </div>
        </SocialContainer>
        <Line />
        <Copyright>
          © Copyright 2022 - Developed by Ricardo Lopes. All rights reserved.
        </Copyright>
      </FooterContainer>
    </>
  );
}
