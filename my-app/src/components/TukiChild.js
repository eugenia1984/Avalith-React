import { useState } from 'react'; // Nuestro primer hook es el useState, el cual nos permite crear un estado en nuestro componente

const TukiChild = ({ animalsArray }) => {
  const [info, setInfo] = useState({name: 'Euge', age: 38});
  const [loading, setLoading] = useState(false);
  const [animals, setAnimals] = useState(['Racoon']);

  // Function to set the name of the user
  const changeInfo = () => {
    setInfo({...info, name: 'Eugenia', lastName: 'Costa'});
  }
  // Function to change state of loading
  const handleLoading = () => {
    setLoading(!loading);
  }
  //const animalsArray2 = ['Cat', 'Dog', 'Elephant', 'Duck', 'Cow'];
  // set the animals array
  const addAnimals = () =>  {
    //animalsArray.length === 1 && setAnimals([...animals, ...animalsArray]);
    if( animalsArray.length === 1 ) {
      setAnimals([...animals, ...animalsArray])
    };
  }
    
  return(
    <div className="TukiChild">
      <p><strong>TukiChild</strong></p>
      <p>Soy hijo de TukiComponents y nieto de App.</p>
      <button onclick={changeInfo}>Change info</button>
      <botton onClick={handleLoading}>Loading</botton>
      <button onClick={addAnimals}>Add animals</button>
    </div>
  );
};

export default TukiChild;