    import {Navbar, Container, Nav} from "react-bootstrap"
    
    const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/">refresh</Navbar.Brand>
                        <Nav>
                            <Nav.Link href="#home">HOME</Nav.Link>
                            <Nav.Link href="#about">ABOUT</Nav.Link>
                            <Nav.Link href="#contact">CONTACT</Nav.Link>
                            <Nav.Link href="#services">SERVICES</Nav.Link>
                            <Nav.Link href="#portofolio">PORTOFOLIO</Nav.Link>
                            <Nav.Link href="#gallery">GALLERY</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar