import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="title">
          <h1>Color Guess</h1>
          <h2>Você consegue adivinhar as cores?</h2>
        </div>
        <div className="record">
          <p>{`Recorde: ${localStorage.getItem('recorde')}`}</p>
        </div>
      </header>
    )
  }
}

export default Header;
