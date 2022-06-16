import {Nav, Container, Navbar, NavDropdown, Button, Modal, Form, Card } from 'react-bootstrap';
import {useState, useEffect} from 'react'
import Header from '../Header';
import axios from 'axios'
import React, { Component } from "react";
import './styles.css'
import Footer from '../Footer';
import ModalCompra from '../ModalCompra';
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';

const Home = () => {

  const [produto, setProduto] = useState([])
  console.log(produto)
  

  const getProduto = async () => {
    const { data } = await axios.get('http://localhost:8080/produtos')
    setProduto(data)

  }

  useEffect(() => {
    getProduto();
  }, [])

  
  return (
    <>
    <div className="body">
     <Header/>
     <h1>Produtos</h1>
      <div className='container container-produtos'>
        {produto && produto.map((item, index) => { return(
        <Card key={index} style={{ width: '14rem' }} className= 'card-produto'>
            <Card.Img variant="top" src={item.foto} />
          <Card.Body>
            <Card.Title>{item.nome}</Card.Title>
          <Card.Text>
            
            <p>VALOR:</p> {item.valorUnitario} <br/>
            <p>CATEGORIA:</p>{item.categoria.nome}
          </Card.Text>
                <ModalCompra id={item.id} 
                nome={item.nome} 
                valorUnitario={item.valorUnitario} 
                categoria={item.categoria.nome}
                foto={item.foto}/> 
          </Card.Body>
        </Card>) } ) }
        <br />
      </div>
      <Footer className='footer'/>
      </div>
    </>
    )
}


export default Home;