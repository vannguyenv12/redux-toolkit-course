import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../redux/app/app.slice";
import { useEffect } from "react";

function Header() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.app.mode);

  useEffect(() => {
    document.querySelector("html").setAttribute("data-bs-theme", mode);
  }, [mode]);

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            label={`${mode} mode`}
            onChange={() =>
              dispatch(changeMode(mode === "light" ? "dark" : "light"))
            }
            checked={mode === "dark"}
          />
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
