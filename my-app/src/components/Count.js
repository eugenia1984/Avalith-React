import { useState } from "react";

const Count = (props) => {
  //console.log("Las props en Count: ", props);
  console.log("El stock es: ", props.stock);
  console.log("El initial es: ", props.initial);
  console.log("El username es: ", props.userName);
  console.log("El id es: ", props.id);
  console.log("El array de animales es : ", props.animals);
  console.log("******************************")

  const [count, setCount] = useState(0);

  const increase = () => { // Function to increase the count
    setCount(count+1);
  }
  
  const decrease = () => { // Function to decrease the count
    setCount(count-1);
  }

  return(
    <div>
      <h2>Count</h2>
      <p>TukiCount: {count} Tukis!</p>
      <p>Stock: {props.stock}</p>
      <button onClick={increase}>
        Click Me <br/> to increase!
      </button>
      <button onClick={decrease}>
        Click Me <br/> to Decrease!
      </button>
    </div>
  );
};

export default Count;