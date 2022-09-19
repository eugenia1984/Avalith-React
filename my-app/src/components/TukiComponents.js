import TukiChild from "./TukiChild";

// Hago un destructuring de las props para poder utilizarlas sobre el componente
// const TukiComponents = ({ animalsArray }) => {  }
const TukiComponents = (props) => { 
   // Para acceder a animalsArray debo usar el props.animalsArray si no hago el destructuring
  return (
    <div className="containerTukiComponents">
      <h2>Tuki components</h2>
      <h3>Clase picante de React.</h3>
      <TukiChild animalsArray={props.animalsArray} />
    </div>
  )
};

export default TukiComponents;