import {Buttom, Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';
import ModalLogin from '../ModalLogin';

const Header = () => {

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{  height: '80px' }}>
        <Container>
        <Navbar.Brand href="#home">SANDALLIANDO</Navbar.Brand >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">QUEM SOMOS</Nav.Link>
            <Nav.Link href="#pricing">AJUDA</Nav.Link>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
            <ModalLogin/>
            <Nav.Link eventKey={2} href="#memes"> 
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}
export default Header;