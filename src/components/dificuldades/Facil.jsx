import React from 'react';

class Facil extends React.Component {
  constructor() {
    super();
    this.state = {
      cor1: '',
      cor2: '',
      cor3: '',
      corEsc: '',
      score: 0,
      acertou: false,
      mensagem: 'Escolha uma cor'
    }
  }

  componentDidMount() {
    this.cores();
  }

  gerarCor = () => {
    const r = parseInt((Math.random() * 255), 0);
    const g = parseInt((Math.random() * 255), 0);
    const b = parseInt((Math.random() * 255), 0);
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  sortear = (arr) => {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand]
  }

  cores = async () => {
    await this.setState({
      cor1: this.gerarCor(),
      cor2: this.gerarCor(),
      cor3: this.gerarCor(),
    })
    const { cor1, cor2, cor3 } = this.state;
    const corAleatoria = [cor1, cor2, cor3];
    const corEsc = this.sortear(corAleatoria);
    await this.setState({corEsc});
  }

  placar = async (event) => {
    const { corEsc } = this.state
    if (event.target.style.backgroundColor === corEsc ) {
      await this.setState((anterior) => ({
        score: anterior.score + 1,
        acertou: true,
        mensagem: 'Acertou!'
      }))
    } else {
      await this.setState({score: 0, acertou: false, mensagem: 'Errou!'})
    }
    await this.cores();
  }

  resetar = () => {
    this.cores();
    this.setState({mensagem: 'Escolha uma cor'});
  }

  render() {
    const { cor1, cor2, cor3, corEsc, score, mensagem } = this.state;
    const ball1 = { backgroundColor: cor1 }
    const ball2 = { backgroundColor: cor2 }
    const ball3 = { backgroundColor: cor3 }
    return (
    <div>
      <p>{`Tente adivinhar esta cor: ${corEsc}`}</p>
      <div>
        <p>Placar: </p>
        <p className='score'>{score}</p>
      </div>
      <div>
        <div className='ball' style={ ball1 } onClick={this.placar} />
        <p className='ball' style={ ball2 } onClick={this.placar}></p>
        <p className='ball' style={ ball3 } onClick={this.placar}></p>
      </div>
      <p className='answer'>{mensagem}</p>
      <div>
        <button className='reset-game' onClick={this.resetar}>Novas cores</button>
      </div>
    </div>
    )
  }
}

export default Facil;
