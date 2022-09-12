import { useState } from 'react';

const TukiChild = () => {
  // Nuestro primer hook es el useState, el cual nos permite
  // crear un estado en nuestro componente
  const [ count, setCount] = useState({name: 'Euge', count: 0});
  console.log("TukiChild");

  const increase = () => {
    console.log('Ahora funciona el increase');
    setCount(count+1);
  }

  return(
    <div className="TukiChild">
      <p><strong>TukiChild</strong></p>
      <p>Soy hijo de TukiComponents y nieto de App.</p>
      <p>Contador: {count}</p>
      <button onClick={increase}>Click Me!</button>
    </div>
  );
};

export default TukiChild;