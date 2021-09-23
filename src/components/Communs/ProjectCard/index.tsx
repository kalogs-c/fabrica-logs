import router from "next/router";

// Components
import { Container, TextWrapper, Title, Subtitle } from "./styles";
import Image from "next/image";

interface ProjectCard {
  goTo: string;
  title: string;
  subtitle: string;
  image: string;
}

function ProjectCard({ goTo, title, subtitle, image }: ProjectCard) {
  return (
    <Container onClick={() => router.replace(`projects/${goTo}`)}>
      <Image src={image} alt={title} width="300" height="200" />
      <TextWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextWrapper>
    </Container>
  );
}

export default ProjectCard;
