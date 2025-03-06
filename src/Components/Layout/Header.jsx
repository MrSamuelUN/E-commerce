import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Badge,
} from "react-bootstrap";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";
import { ThemeContext } from "../../App";
import { useGlobalContext } from "../AppContext";

function Header() {
  const location = useLocation();
  const [toggle, setToggle] = useState(true);
  const { toggleTheme } = useContext(ThemeContext);
  const {
    state: { cart },
  } = useGlobalContext();

  function togglebtn() {
    setToggle((prev) => !prev);
    toggleTheme();
  }

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="nav-container">
          <Navbar.Brand href="#home" className="pe-2" variant="bg primary">
            E-Commerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <Link
                  style={{ textDecoration: "none" }}
                  to="/"
                  className={
                    location.pathname == "/"
                      ? "bg-dark p-2 rounded text-white"
                      : "notactive-link"
                  }
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link
                  style={{ textDecoration: "none" }}
                  to="/about"
                  className={
                    location.pathname == "/about"
                      ? "bg-dark p-2 rounded text-white"
                      : "notactive-link"
                  }
                >
                  About
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link
                  style={{ textDecoration: "none" }}
                  to="/products"
                  className={
                    location.pathname == "/products"
                      ? "bg-dark p-2 rounded text-white"
                      : "notactive-link"
                  }
                >
                  Products
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link
                  style={{ textDecoration: "none" }}
                  to="/cart"
                  className={
                    location.pathname == "/cart"
                      ? "bg-dark p-2 rounded text-white"
                      : "notactive-link"
                  }
                >
                  Cart
                </Link>
              </Nav.Link>
            </Nav>
            {/* {toggle ? (
              <Button onClick={togglebtn} variant="white">
                <IoIosMoon fontSize="25px" />
              </Button>
            ) : (
              <Button onClick={togglebtn} variant="white">
                <IoIosSunny fontSize="25px" />
              </Button>
            )} */}

            <Button variant="white" id="nav-btn">
              <MdOutlineShoppingCart style={{ fontSize: "25px" }} />
              <Badge className="fs-0">{cart.length}</Badge>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
