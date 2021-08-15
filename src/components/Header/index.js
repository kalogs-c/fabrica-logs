// Components
import { Header } from "./styles";
import NavBar from "./NavBar";

export default function MainHeader() {
  return (
    <>
      <Header>
        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          <h1>Fl</h1>
        </div>
        <NavBar />
      </Header>
    </>
  );
}
