import React from 'react';
import Header from '../Header';

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
      disable: false,
      newColor: true,
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
        disable: true,
        newColor: false,
      }))
      const { score } = this.state;
      const recorde = parseInt(localStorage.getItem('recorde'));
      if (score > recorde) localStorage.setItem('recorde', score);
    } else {
      await this.setState({ acertou: false, disable: true, newColor: false,})
    }
  }

  novasCores = () => {
    this.cores();
    this.setState({mensagem: 'Escolha uma cor', disable: false, acertou: true, newColor: true,});
  }

  resetar = () => {
    this.cores();
    this.setState({mensagem: 'Escolha uma cor', disable: false, acertou: true, score: 0, newColor: true});
  }

  render() {
    const { cor1, cor2, corEsc, score, mensagem, disable, acertou, newColor } = this.state;
    const { muda } = this.props
    const ball1 = { backgroundColor: cor1 }
    const ball2 = { backgroundColor: cor2 }
    const ballEsc = { backgroundColor: corEsc }
    return (
    <div>
      <Header />
      <div className="main">
        <div className="corEsc">
          <h2>Tente adivinhar esta cor:</h2>
          <h2>{corEsc}</h2>
        </div>
        <div className='score'>
          <h2>Placar: </h2>
          <h2 className="cor">{score}</h2>
        </div>
        <div>
          <button className='ball' style={ ball1 } onClick={this.placar} disabled={disable} />
          <button className='ball' style={ ball2 } onClick={this.placar} disabled={disable} />
        </div>
        {acertou ? 
        <div className="mensagem">
          <h2 className='answer'>{mensagem}</h2>
          <div>
            <button className='reset-game button' onClick={this.novasCores} disabled={newColor}>Novas cores</button>
          </div>
        </div>
        :
        <div className="mensagem">
          <h2>{`Errou. Placar total: ${score} pontos.`}</h2>
          <h2>A cor certa era:</h2>
          <button className='ball' style={ ballEsc } disabled={disable} />
          <h2>Novo jogo?</h2>
          <div>
            <button onClick={this.resetar} className="button">Sim</button>
            <button onClick={ muda } className="button">Não</button>
          </div>
        </div>
        }
      </div>
    </div>
    )
  }
}

export default SuperFacil;
