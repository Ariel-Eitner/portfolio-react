import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import "./MainNavbar.css";
import { useEffect, useState } from "react";

export const MainNavbar = () => {
  const [colorChange, setColorChange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => window.removeEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <Navbar
      bg={colorChange ? "light" : "transparent"}
      variant="light"
      expand="lg"
      fixed="top"
      className={""}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ cursor: "pointer", color: colorChange ? "black" : "white" }}
        >
          Ariel Eitner
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ gap: "5px" }}>
            {/* Utiliza Link de react-scroll para los enlaces */}
            <Link
              to="Inicio"
              className="nav-link "
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
              style={{
                cursor: "pointer",
                color: colorChange ? "black" : "white",
              }}
            >
              Inicio
            </Link>
            <Link
              to="About"
              className="nav-link "
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              style={{
                cursor: "pointer",
                color: colorChange ? "black" : "white",
              }}
            >
              Acerca de
            </Link>
            <Link
              to="Services"
              className="nav-link "
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              style={{
                cursor: "pointer",
                color: colorChange ? "black" : "white",
              }}
            >
              Servicios
            </Link>
            <Link
              to="Portfolio"
              className="nav-link "
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
              style={{
                cursor: "pointer",
                color: colorChange ? "black" : "white",
              }}
            >
              Portafolio
            </Link>
            <Link
              to="Contacto"
              className="nav-link "
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
              style={{
                cursor: "pointer",
                color: colorChange ? "black" : "white",
              }}
            >
              Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
