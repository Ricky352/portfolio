import styled from "styled-components";

import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { Text } from "../components/Text";
import { TechnologyStack } from "../components/TechnologyStack";

export default function About() {
  return (
    <>
      <Layout>
        <Container gap="20px" margin="12px 20px">
          <Container gap="12px" margin="0px 0px 20px 0px">
            <Container>
              <Text text="About me" size="40px" />
            </Container>
            <Text
              text="Hello my name is Ricardo Lopes. I'm a Full Stack Developer that started as a self learner watching Youtube videos and developing some small websites for friends and family. After finding myself enjoying coding more and more, I joined a 4 month bootcamp here in Luxembourg, where I was able to improve my coding skills."
              size="20px"
            />
          </Container>
          <Container gap="12px">
            <Container>
              <Text text="Tech Stack" size="40px" />
            </Container>
            <Container direction="row" gap="20px">
              <TechnologyStack />
            </Container>
          </Container>
        </Container>
      </Layout>
    </>
  );
}
