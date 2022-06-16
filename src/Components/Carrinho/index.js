import React, { Component } from 'react'
import './index.css'
import List from './List'
import Promo from './Promo'

var carrinho = JSON.parse(window.localStorage.getItem('carrinho'))
var ver_carrinho = 'false'

class App extends Component {
  state = {
    ids: [ /* 23, 67, 80 */ ],
    nomes: [ /* "drink 23", "drink 67", "drink 80" */ ],
    precos: [ /* "15.50", "20.00", "40" */ ],
    quantidades: [ /* "4", "6", "9" */ ],
    fotos: [ /* "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rysb3r1513706985.jpg", "https://www.thecocktaildb.com//images//media//drink//xsqsxw1441553580.jpg", "https://www.thecocktaildb.com//images//media//drink//xsqsxw1441553580.jpg" */ ]
  }

  promocoes = {
    ids: [ 23, 56, 67 ],
    nomes: [ "drink 23", "drink 56", "drink 67" ],
    precos: [ "10.50", "12.00", "30" ],
    fotos: [ "https://www.thecocktaildb.com/images/media/drink/ht3hnk1619704289.jpg", "https://www.thecocktaildb.com/images/media/drink/rysb3r1513706985.jpg", "https://www.thecocktaildb.com/images/media/drink/xsqsxw1441553580.jpg", "https://www.thecocktaildb.com/images/media/drink/xsqsxw1441553580.jpg" ]
  }

  onAdd = (id, nome, preco, quantidade, foto) => {
    const {ids, nomes, precos, quantidades, fotos} = this.state
    var carrinho = {
      ids: [id, ...ids],
      nomes: [nome, ...nomes],
      precos: [preco, ...precos],
      quantidades: [quantidade, ...quantidades],
      fotos: [foto, ...fotos]
    }

    this.setState(carrinho)
    window.localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }

  onAddQuant = (index, mode) => {
    var produto;
    var verification = 'false';
    let {ids: p_ids, nomes: p_nomes, precos: p_precos, fotos: p_fotos} = this.promocoes
    let {ids, nomes, precos, quantidades, fotos} = this.state

    ids.map( (item, p_carrinho ) => {
      if (mode === 2) {
        produto = p_ids[index]
      } else {
        produto = ids[index]
      }

      if (Number(ids[p_carrinho]) === Number(produto)) {
        quantidades[p_carrinho] = Number(quantidades[p_carrinho]) + Number('1')

        carrinho = {ids: ids, nomes: nomes, precos: precos, quantidades: quantidades, fotos: fotos}

        this.setState(carrinho)
        window.localStorage.setItem('carrinho', JSON.stringify(carrinho));
        verification = 'true'
      }

      return null
    })

    if (verification === 'false') {
      this.onAdd(p_ids[index], p_nomes[index], p_precos[index], '1', p_fotos[index])
    }
  }

  onRemove = (index, mode) => {
    
    let {ids, nomes, precos, quantidades, fotos} = this.state

    quantidades[index] = Number(quantidades[index]) - Number('1')
    if (mode === 2 || quantidades[index] <= '0') {
      ids = ids.filter( (item, i) => i !== index )
      nomes = nomes.filter( (item, i) => i !== index )
      precos = precos.filter((item, i) => i !== index)
      quantidades = quantidades.filter((item, i) => i !== index)
      fotos = fotos.filter((item, i) => i !== index)
    }

    carrinho = {ids: ids, nomes: nomes, precos: precos, quantidades: quantidades, fotos: fotos}

    this.setState(carrinho)
    window.localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }

  onCarrinho = () => {
    if (carrinho) {
      this.setState({ids: carrinho.ids, nomes: carrinho.nomes, precos: carrinho.precos, quantidades: carrinho.quantidades, fotos: carrinho.fotos})
    }
  }

  componentDidMount() {
    this.onCarrinho()
  }

  render() {
    return (
      <div className="App col-md-4 col-md-offset-4">
        <Promo 
          ids={this.promocoes.ids}
          nomes={this.promocoes.nomes}
          precos={this.promocoes.precos}
          fotos={this.promocoes.fotos}
          addItem={this.onAddQuant}
          titulo="Promoções"
        />
        
        <List 
          ids={this.state.ids}
          nomes={this.state.nomes}
          precos={this.state.precos}
          quantidades={this.state.quantidades}
          fotos={this.state.fotos}
          removeItem={this.onRemove}
          addItem={this.onAddQuant}
          titulo="Carrinho"
        />
       
      </div>
    );
  }
}

export default App
