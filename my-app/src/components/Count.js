import { useState } from "react";

const Count = (props) => {
  console.log("Las props en Count: ", props);

  console.log("El stock es: ", props.stock);
  console.log("El initial es: ", props.initial);
  console.log("El username es: ", props.userName);
  console.log("El id es: ", props.id);
  console.log("Los animales: ", props.animalsArray);

  const [count, setCount] = useState(0);
  
  // Function to increase the count
  const increase = () => {
    setCount(count+1);
  }
  // Function to decrease the count
  const decrease = () => {
    setCount(count-1);
  }

  return(
    <div>
      <p>Count</p>
      <p>TukiCount: {count} Tukis!</p>
      <p>Stock: {props.stock}</p>
      <button onClick={increase}>Click Me to increase!</button>
      <button onClick={decrease}>Click Me to Decrease!</button>
    </div>
  );
};

export default Count;