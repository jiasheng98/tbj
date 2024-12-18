import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../../public/images/tbjlogo.png";
import { useRouter } from "next/router";
import React, { useState } from "react";

function OffcanvasExample() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      // Redirect to the search results page with the query as a parameter
      router.push(`/search?query=${searchQuery}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e); // Trigger search when Enter is pressed
    }
  };
  

  return (
    <>
      <Navbar key="lg" expand="lg" className="header-container p-md-4">
        <Container fluid>
          <Navbar.Brand href="/">
            <img 
            class='logo'
            src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$'md'`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-$'md'`}
            aria-labelledby={`offcanvasNavbarLabel-expand-$'md'`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-$'md'`}>
              <img 
            class='tbj-logo'
            src={Logo} />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3 align-items-md-center">
                <Nav.Link href="/" className="header-link mx-4">
                  Home
                </Nav.Link>
                <Nav.Link href="/about" className="header-link mx-4">
                  About Us
                </Nav.Link>
                <Nav.Link href="/product" className="header-link mx-4">
                  Product
                </Nav.Link>
                <Nav.Link href="/contact" className="header-link mx-4">
                  Contact Us
                </Nav.Link>
                {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-$'md'`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
              </Nav>
              <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress} // Listen for Enter key press
                />
                <Button onClick={handleSearch} variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
