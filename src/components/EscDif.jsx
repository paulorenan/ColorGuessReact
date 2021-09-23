import React from 'react';
import Header from './Header';

class EscDif extends React.Component {
  render() {
    const { sup, fac, med, dif} = this.props;
    return (
      <div>
        <Header />
        <div className="main1">
          <div className="initial">
            <h1>Bem vindo ao jogo Color Guess</h1>
            <h1>Escolha a dificuldade:</h1>
          </div>
          <div>
            <button type="button" onClick={ sup } className="button">Super Fácil</button>
            <button type="button" onClick={ fac } className="button">Fácil</button>
            <button type="button" onClick={ med } className="button">Médio</button>
            <button type="button" onClick={ dif } className="button">Difícil</button>
          </div>
        </div>
      </div>
    )
  }
}

export default EscDif;
