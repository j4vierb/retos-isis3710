import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar style={{ padding: "1rem", backgroundColor: "#000"}}>
        <Container>
          <Navbar.Brand href="/mascotas">
            <h1 style={{ textAlign: 'left', color: "#fff" }}>Adóptame</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;