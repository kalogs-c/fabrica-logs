import router from "next/router";

// components
import { Item } from "./styles";

interface MenuItemProps {
  goTo: string;
  content: string;
}

function MenuItem({ goTo, content }: MenuItemProps) {
  return (
    <>
      <Item onClick={() => router.push(`${goTo}`)}>{content}</Item>
    </>
  );
}

export default MenuItem;
