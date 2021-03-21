import React, { useState } from 'react';

function App(): JSX.Element {
  const [color, setColor] = useState('blue');

  const buttonStyle = {
    backgroundColor: color,
    color: 'white',
    width: '10vw',
    height: '10vh',
  };

  return (
    <main>
      <label htmlFor="numberInput">
        Type a number
        <input
          id="numberInput"
          type="number"
          onChange={(value) => {
            if (Number(value.target.value) < 10) setColor('blue');
            else setColor('red');
          }}
        />
      </label>
      <br />

      <button type="button" style={buttonStyle}>
        Color
      </button>
    </main>
  );
}

export default App;
