import { useState, useEffect } from "react";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    console.log("Componente montado o actualizado!");
    return console.log("Componente desmontado!");
  }, [count]);

  const increase = () => { // Function to increase the count
    const newValue = count+1;
    if(newValue <= stock)  {
      setCount(newValue);
    }
  }
  
  const decrease = () => { // Function to decrease the count
    const newValue = count-1;
    newValue >= initial && setCount(newValue);
  }

  return(
    <div>
      <h2>Count</h2>
      <p>TukiCount: {count} Tukis!</p>
      <p>Stock: {stock}</p>
      <button onClick={increase} className="btn-2">Click Me <br/> to add!</button>
      <button onClick={decrease} className="btn-2">Click Me <br/> to quit!</button>
      <button>Add <br/> to Cart</button>
    </div>
  );
};

export default ItemCount;