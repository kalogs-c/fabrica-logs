import { Container } from "./styles";
import Image from "next/image";

function Project({ data }) {
  const { title, fullDescription, image, technologies, ghrepo } = data.project;
  const technologiesList = Object.values(technologies)
  return (
    <Container>
      <Image src={image.url} alt={title} width="1280" height="720" />
      <h1>{title}</h1>
      <p>{fullDescription}</p>
      <p>{technologiesList}</p>
      <a href={ghrepo}>Github repo</a>
    </Container>
  );
}

export default Project;
