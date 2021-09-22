import React from 'react';

class EscDif extends React.Component {
  render() {
    const { fac, med, dif} = this.props;
    return (
      <div>
      <div>
        <p>Bem vindo ao jogo Color Guess</p>
        <p>Escolha a dificuldade:</p>
      </div>
      <div>
        <button type="button" onClick={ fac }>Facil</button>
        <button type="button" onClick={ med }>Médio</button>
        <button type="button" onClick={ dif }>Difícil</button>
      </div>
    </div>
    )
  }
}

export default EscDif;
