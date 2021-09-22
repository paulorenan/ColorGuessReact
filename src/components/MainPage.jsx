import React from 'react';
import EscDif from './EscDif';
import Facil from './dificuldades/Facil';
import Medio from './dificuldades/Medio';
import Dificil from './dificuldades/Dificil';

class MainPage extends React.Component {
  constructor(){
    super();
    this.state = {
      facil: false,
      medio: false,
      dificil: false,
      difEscolhida: false,
    }
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

  jogo() {
    const { facil, medio, dificil } = this.state
    return (
      <div>
        { facil ?  <Facil /> : null }
        { medio ?  <Medio /> : null }
        { dificil ?  <Dificil /> : null }
      </div>
    )
  }

  render() {
    const { difEscolhida } = this.state;
    return (
      <div>
        { difEscolhida ? this.jogo() : <EscDif fac={this.escFac} med={this.escMed} dif={this.escDif}/> }
      </div>
    )
  }
}

export default MainPage;
