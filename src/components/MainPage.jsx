import React from 'react';
import EscDif from './EscDif';
import SuperFacil from './dificuldades/Mel';
import Facil from './dificuldades/Facil';
import Medio from './dificuldades/Medio';
import Dificil from './dificuldades/Dificil';

class MainPage extends React.Component {
  constructor(){
    super();
    this.state = {
      superFacil: false,
      facil: false,
      medio: false,
      dificil: false,
      difEscolhida: false,
    }
  }

  escSupFac = () => {
    this.setState({ superFacil: true, difEscolhida: true })
  }

  escFac = () => {
    this.setState({ facil: true, difEscolhida: true })
  }

  escMed = () => {
    this.setState({ medio: true, difEscolhida: true })
  }

  escDif = () => {
    this.setState({ dificil: true, difEscolhida: true })
  }

  changeDif = () => {
    this.setState({
      superFacil: false,
      facil: false,
      medio: false,
      dificil: false,
      difEscolhida: false,
    })
  }

  jogo() {
    const { superFacil, facil, medio, dificil } = this.state
    return (
      <div>
        { superFacil ? <SuperFacil muda={this.changeDif}/> : null }
        { facil ?  <Facil muda={this.changeDif}/> : null }
        { medio ?  <Medio muda={this.changeDif}/> : null }
        { dificil ?  <Dificil muda={this.changeDif}/> : null }
      </div>
    )
  }

  render() {
    const { difEscolhida } = this.state;
    if (localStorage.getItem('recorde') === null) {
      localStorage.setItem('recorde', 0)
    }
    return (
      <div className="backImage">
        { difEscolhida ? this.jogo() : <EscDif sup={ this.escSupFac } fac={this.escFac} med={this.escMed} dif={this.escDif}/> }
      </div>
    )
  }
}

export default MainPage;
