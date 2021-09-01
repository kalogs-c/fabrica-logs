import Image from "next/image";
import { Container, TechName } from "./styles";

interface SkillCardProps {
  imageUrl: string;
  name: string;
}

function SkillCard({ imageUrl, name }: SkillCardProps) {
  return (
    <Container key={name}>
      <Image src={imageUrl} alt={name} width="120" height="120" />
      <TechName>{name}</TechName>
    </Container>
  );
}

export default SkillCard;
