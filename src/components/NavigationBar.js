import {Navbar, Container, Nav, NavDropdown, Form, Button} from 'react-bootstrap'
import logoImage from '../assets/image/bg/Logo.png'
    
    const NavigationBar = ()=>{
     return (
          <Navbar bg="success" data-bs-theme="success">
            <Container>
          <Navbar.Brand href="/">
            <img
              src= {logoImage}
              width="50"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>

                  <NavDropdown title="Lainnya" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#services">Services</NavDropdown.Item>
                    <NavDropdown.Item href="#portofolio">Portofolio</NavDropdown.Item>
                    <NavDropdown.Item href="#gallery">Gallery</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#footer">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="dark">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
     )
    }
    
    export default NavigationBar;