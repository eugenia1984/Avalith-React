import ItemCount from "./ItemCount.js";
import { useState, useEffect } from "react";

const ItemListContainer = (props) => {
  const [ products, setProducts ] = useState([]);
  console.log("Products: ", products);

  const getProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/');
      console.log("Response: ", response);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect( () => {
    getProducts();
  }, [])

  return (
    <div className="tukiStore">
      <h2>Bienvenidos a {props.nameEcommerce}</h2>
      <ItemCount 
        stock={15} 
        initial={1} 
      />
      <h3>Productos:</h3>
      {products.map( (product) => {
        return (
          <p>- {product.title}</p>
        )
      })}
    </div>
  );
}

export default ItemListContainer;