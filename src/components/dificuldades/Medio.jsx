import React from 'react';

class Medio extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p className='ball' id='cor1'></p>
          <p className='ball' id='cor2'></p>
          <p className='ball' id='cor3'></p>
          <p className='ball' id='cor4'></p>
          <p className='ball' id='cor5'></p>
      </div>
      <p id='answer'>Escolha uma cor</p>
    </div>
    )
  }
}

export default Medio;
