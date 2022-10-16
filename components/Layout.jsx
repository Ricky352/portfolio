import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
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
