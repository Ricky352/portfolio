import { Container } from "../components/Container";
import { Layout } from "../components/Layout";
import { MainTitle } from "../components/MainTitle";

export default function Home() {
  return (
    <>
      <Layout>
        <Container margin="100px 0px 0px 0px">
          <MainTitle title="Hey, I'm Ricardo Lopes!"></MainTitle>
          <MainTitle title="A Front End Developer"></MainTitle>
          <MainTitle title="From Luxembourg"></MainTitle>
        </Container>
      </Layout>
    </>
  );
}
