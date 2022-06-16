import {Nav, Container, Navbar, NavDropdown, Button, Modal, Form } from 'react-bootstrap';
import {useState, render} from 'react'


const ModalLogin = () => {
    const [showModal, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
            <div className="d-flex align-items-center justify-content-center modal-login" style={{ height: "5vh" }}>
                <Button variant="dark" onClick={handleShow}>
                    Login
                </Button>
            </div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Faça seu Login</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark text-light'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Manter-se conectado" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
  }

  export default ModalLogin;