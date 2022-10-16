import { Layout } from "../components/Layout";
import { Project } from "../components/Project";
import { Container } from "../components/Container";
import { Text } from "../components/Text";

export default function Projects() {
  return (
    <>
      <Layout>
        <Container align="center" gap="20px" margin="0px 0px 20px 0px">
          <Text text="Projects" size="36px" />
          <Text
            text="Click on the logos to see a short description"
            size="16px"
          />
          <Project
            image="fannen.png"
            description="Fannen is a map aggregator for Luxembourg, created by Noé, Zakariya, Sophia and me during the final project of the bootcamp"
            text="Github Repository"
            link=""
          />
        </Container>
      </Layout>
    </>
  );
}
