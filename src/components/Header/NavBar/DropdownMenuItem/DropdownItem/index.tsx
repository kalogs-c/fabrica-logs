import { Container } from './styles';

interface DropdownItemProps {
  content: string;
}

function DropdownItem({ content }: DropdownItemProps) {
  return (
    <Container>
      {content}
    </Container>
  );
};

export default DropdownItem;
