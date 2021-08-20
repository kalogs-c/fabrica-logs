import { Container } from './styles';

interface DropdownItemProps {
  content: string;
}

function DropdownItem({ content }: DropdownItemProps) {
  return (
    <Container className="dropdown-title" >
      {content}
    </Container>
  );
};

export default DropdownItem;
