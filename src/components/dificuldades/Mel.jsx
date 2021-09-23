import React from 'react';

class SuperFacil extends React.Component {
  constructor() {
    super();
    this.state = {
      cor1: '',
      cor2: '',
      corEsc: '',
      score: 0,
      acertou: true,
      mensagem: 'Escolha uma cor',
      disable: false
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
    })
    const { cor1, cor2 } = this.state;
    const corAleatoria = [cor1, cor2];
    const corEsc = this.sortear(corAleatoria);
    await this.setState({corEsc});
  }

  placar = async (event) => {
    const { corEsc } = this.state
    if (event.target.style.backgroundColor === corEsc ) {
      await this.setState((anterior) => ({
        score: anterior.score + 0.5,
        acertou: true,
        mensagem: 'Acertou!',
        disable: true
      }))
    } else {
      await this.setState({ acertou: false, disable: true})
    }
  }

  novasCores = () => {
    this.cores();
    this.setState({mensagem: 'Escolha uma cor', disable: false, acertou: true});
  }

  resetar = () => {
    this.cores();
    this.setState({mensagem: 'Escolha uma cor', disable: false, acertou: true, score: 0});
  }

  render() {
    const { cor1, cor2, corEsc, score, mensagem, disable, acertou } = this.state;
    const { muda } = this.props
    const ball1 = { backgroundColor: cor1 }
    const ball2 = { backgroundColor: cor2 }
    const ballEsc = { backgroundColor: corEsc }
    return (
    <div>
      <p>{`Tente adivinhar esta cor: ${corEsc}`}</p>
      <div>
        <p>Placar: </p>
        <p className='score'>{score}</p>
      </div>
      <div>
        <button className='ball' style={ ball1 } onClick={this.placar} disabled={disable} />
        <button className='ball' style={ ball2 } onClick={this.placar} disabled={disable} />
      </div>
      {acertou ? 
      <div>
        <p className='answer'>{mensagem}</p>
        <div>
          <button className='reset-game' onClick={this.novasCores}>Novas cores</button>
        </div>
      </div>
      :
      <div>
        <p>{`Errou, fim de jogo, placar total: ${score} pontos.`}</p>
        <p>A cor certa era:</p>
        <button className='ball' style={ ballEsc } disabled={disable} />
        <p>Continuar jogo?</p>
        <button onClick={this.resetar}>Sim</button>
        <button onClick={ muda }>Não</button>
      </div>
      }
    </div>
    )
  }
}

export default SuperFacil;
