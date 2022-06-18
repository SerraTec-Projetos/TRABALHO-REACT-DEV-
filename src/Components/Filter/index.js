 import {useState, useEffect} from "react";
 import { useMemo } from "react";
 import axios from "axios";
 import { Dropdown } from "react-bootstrap";
 
 

export default function Filter(){
    const [categoria, setCategoria] = useState([])
 console.log(categoria)

 const getCategoria = async () => {
    const { data } = await axios.get('http://localhost:8080/categorias' )
    setCategoria(data)
 
  }

  useEffect(() => {
    getCategoria();
  }, [])

 

    const [busca, setBusca] = useState('');

    const categoryFilter = useMemo(() => {
        const lowerBusca = busca.toLowerCase();
        return categoria.filter(item => categoria.filter|| item.type === categoria.filter);
    }, [busca]);
    
    return (
       
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown href="#/action-1">
            <ul>
                
                {categoria && categoria.map((item,index) => {return(
                     <input type='button' key={index} value={item.nome} >
                </input>)})}
            </ul>
            </Dropdown>
          
        </Dropdown.Menu>
      </Dropdown>
    )
}
