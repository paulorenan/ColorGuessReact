import React from 'react';

class Medio extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p class='ball' id='cor1'></p>
          <p class='ball' id='cor2'></p>
          <p class='ball' id='cor3'></p>
          <p class='ball' id='cor4'></p>
          <p class='ball' id='cor5'></p>
      </div>
      <p id='answer'>Escolha uma cor</p>
    </div>
    )
  }
}

export default Medio;
