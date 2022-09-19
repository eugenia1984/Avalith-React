import Count from "./components/Count";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {
  const animalsArray = ['Cat', 'Dog', 'Elephant', 'Duck', 'Cow'];

  return (
    <div className="App">
      <h1>La primer práctica con React en la Skill Factory de Avalith</h1>
      <NavBar />
      <ItemListContainer nameEcommerce="Tuki Store"/>
      <Count 
        id={1} 
        stock={10} 
        initial={1} 
        userName="Euge"
        animals={animalsArray}
      />
    </div>
  );
}

export default App;