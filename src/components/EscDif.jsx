import React from 'react';

class EscDif extends React.Component {
  render() {
    const { supfac, fac, med, dif} = this.props;
    return (
      <div>
      <div>
        <p>Bem vindo ao jogo Color Guess</p>
        <p>{`Recorde: ${localStorage.getItem('recorde')}`}</p>
        <p>Escolha a dificuldade:</p>
      </div>
      <div>
        <button type="button" onClick={ supfac }>Super Fácil</button>
        <button type="button" onClick={ fac }>Fácil</button>
        <button type="button" onClick={ med }>Médio</button>
        <button type="button" onClick={ dif }>Difícil</button>
      </div>
    </div>
    )
  }
}

export default EscDif;
