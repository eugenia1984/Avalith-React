import TukiChild from "./TukiChild";

// Hago un destructuring de las props para poder utilizarlas sobre el componente
const TukiComponents = ({ animalsArray}) => {
  //console.log("Tuki Components");
  //console.log("Props en TukiComponents: ", props); // muestra el array de animales
  // Para acceder a animalsArray debo usar el props.animalsArray
  //const { animalsArray } = props;
  return (
    <div className="containerTukiComponents">
      <h2>Tuki components</h2>
      <TukiChild />
    </div>
  )
};

export default TukiComponents;