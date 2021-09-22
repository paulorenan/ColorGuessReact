import React from 'react';
import EscDif from './EscDif';

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

  render() {
    return (
      <div>Hello World</div>
    )
  }
}

export default MainPage;
