import React, { Component } from 'react' 

class List extends Component {
  render() {
    const {ids, nomes, precos, quantidades, fotos, removeItem, addItem, titulo} = this.props
    var valor_total = 0;
    
    return (
      <div>
        <h2>{titulo}</h2>
        <ul className="list-group">
          {ids.map( (item, index ) => {
            valor_total = parseFloat(valor_total) + precos[index] * quantidades[index];

            return ( 
                  <li className="list-group-item">
                    <button 
                      className="remove"
                      onClick={ () => removeItem( index, 2 ) }>
                    </button>

                    <div className="row">
                      <img src={fotos[index]} alt={nomes[index]} width={120}/>
                      <div className="col-md-9 col-md-offset-1">{nomes[index]} <br/>Preço: {precos[index]} <br/>Quantidade: {quantidades[index]} <br/>Total: {precos[index] * quantidades[index]} 
                    </div>

                    <button 
                      className="btn btn-success"
                      onClick={ () => addItem( index, 1 ) }>+1
                    </button>
                    <button 
                      className="btn btn-danger"
                      onClick={ () => removeItem( index, 1 ) }>-1
                    </button>
                    </div>
                  </li>
              )
          })}
        </ul>

        { (nomes.length === 0) ?  <div className="alert alert-danger">Você não possui itens no carrinho</div>
        : <div><strong>Total:</strong> {parseFloat(valor_total)} reais </div>
      
        }
      </div>
    )
  }
}

export default List