import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";
import styled from "styled-components";
import { device } from "./Device";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;

  @media ${device.tablet} {
    width: 80vw;
    margin: 0vw 10vw;
  }

  @media ${device.laptop} {
    width: 60vw;
    margin: 0vw 20vw;
  }
`;

export function Layout({ children, pageTitle = "Ricardo Lopes" }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </>
  );
}
