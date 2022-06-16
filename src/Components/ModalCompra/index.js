import './styles.css'
import {Nav, Container, Navbar, NavDropdown, Button, Modal, Form } from 'react-bootstrap';
import {useState, render} from 'react'

const ModalCompra = (props) =>{
    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
            <div className="d-flex align-items-center justify-content-center modal-login" style={{ height: "5vh" }}>
                <Button variant="dark" onClick={handleShow}>
                    COMPRAR 
                </Button>
            </div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                  
                    <Modal.Title>COMPRAR</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark text-light'>
                    <h1>{props.nome}</h1>
                    <h4>{props.valorUnitario} </h4>
                    {props.categoria.nome}
                    
                    <img src={props.foto} alt="" width='400vw' />
                    
                        <Button variant="secondary" type="submit">
                            ADICIONAR CARRINHO 
                        </Button>
                        <Button variant="success" type="submit" >
                            FINALIZAR COMPRA
                        </Button>
                </Modal.Body>
            </Modal>
        </>
    );

}

export default ModalCompra