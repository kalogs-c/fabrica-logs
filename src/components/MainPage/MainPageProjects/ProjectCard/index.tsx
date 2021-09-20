// Components
import { Container, TextWrapper, Title, Subtitle } from "./styles";
import Image from "next/image";

interface ProjectCard {
  keyId: string;
  title: string;
  subtitle: string;
}

function ProjectCard({ keyId, title, subtitle }: ProjectCard) {
  return (
    <Container key={keyId}>
      <Image
        src="https://picsum.photos/300/200"
        alt="Ramdom image"
        width="300"
        height="200"
      />
      <TextWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextWrapper>
    </Container>
  );
}

export default ProjectCard;
