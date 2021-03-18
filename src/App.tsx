import React, { useState } from 'react';

function App() {

  const [color, setColor] = useState('blue');


  const buttonStyle = {
    backgroundColor: color,
    color:'white',
    width:'10vw',
    height:'10vh'
  };
  
  return (
    <main>
      <label htmlFor="name">Type a number  </label>
      <input type="text" onChange={(value)=>{
        if(Number(value.target.value) < 10)
          setColor('blue');
        else
          setColor('red');
      }}></input>
      <br/>

      <button style={buttonStyle}>Color</button>
    </main>
  );
}

export default App;
