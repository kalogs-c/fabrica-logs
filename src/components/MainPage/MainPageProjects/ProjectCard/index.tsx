// Components
import { Container, TextWrapper, Title, Subtitle } from "./styles";
import Image from "next/image";
import OpenCard from "../ProjectCard";

interface ProjectCard {
  id: string;
  title: string;
  subtitle: string;
}

function ProjectCard({ id, title, subtitle }: ProjectCard) {
  return (
    <Container>
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
