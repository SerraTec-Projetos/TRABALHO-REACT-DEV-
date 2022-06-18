import React, { Component } from 'react'   

class Promo extends Component {
  render() {
    const {ids, nomes, precos, fotos, addItem, titulo} = this.props

    return (
      <div>
        <h2>{titulo}</h2>
        <ul className="list-group">
          {ids.map( (item, index ) => {
            return ( 
                  <li className="list-group-item">
                    
                    <div className="row">
                      <img src={fotos[index]} alt={nomes[index]} width={120}/>
                      <div className="col-md-9 col-md-offset-1">{nomes[index]} <br/>Preço: {precos[index]}
                    </div>

                    <button 
                      className="btn btn-success"
                      onClick={ () => addItem( index, 2 ) }>adicionar
                    </button>
                    </div>
                  </li>
              )
          })}
        </ul>
      </div>
    )
  }
}

export default Promo