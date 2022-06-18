import {Buttom, Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ModalLogin from '../ModalLogin';
import Filter from '../Filter';



const Header = () => {

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{  height: '80px' }}>
        <Container>
        <Link to='/'>
          <button>SANDALLIANDO</button>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to='/quemsomos/' >
            <button>QUEM SOMOS</button>
            </Link>
            <Link to='/faleconosco/'>
              <button>FALE CONOSCO</button>
            </Link>
          </Nav>
          <Nav>
            <ModalLogin/>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}
export default Header;