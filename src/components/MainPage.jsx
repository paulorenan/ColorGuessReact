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
        { facil ?  <Facil /> : null }
        { medio ?  <Medio /> : null }
        { dificil ?  <Dificil /> : null }
        <button onClick={this.changeDif}>Escolher outra dificuldade</button>
      </div>
    )
  }

  render() {
    const { difEscolhida } = this.state;
    return (
      <div>
        { difEscolhida ? this.jogo() : <EscDif supfac={ this.escSupFac } fac={this.escFac} med={this.escMed} dif={this.escDif}/> }
      </div>
    )
  }
}

export default MainPage;
