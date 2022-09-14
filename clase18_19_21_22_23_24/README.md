# :star: Clase 18 y 19  * Viernes 12 Agosto y Miércoles 18 de Agosto * Introduccion a Ract 

---

### Temas

1. Presentando React

2. Formas de Crear un Proyecto en React

3. Estructura de carpetas

4. Errores en React

5. ¿Cómo funciona React?

---

# :star: 9. Introducción a React

### 1 - Introducción a React

- Es una librería creada por Facebook para el Front End

- Su primer release fue lanzada en Mayo 2013

- Su propósito principal es facilitar la tarea de crear interfaces de usuarios (**UI**) a través de **componentes**.

- Propone el concepto de **Reactivo a los cambios** (comenzo con clases y ahora tiene componentes funcionales)

- Tiene una comunidad muy grande, hay mucha documentación

---

# :star: 10. Sintaxis y estructura de proyectos en React

### 2. Formas de Crear un Proyecto en React


:star: **Creando un proyecto con CRA (Create React App)**

- **CRA** es el asincronismo correspondiente a **Create React App**.

- Es el comando que la librería trae de forma natural para poder crear un proyecto de React.

- Como sabemos que esto depende de **Node**, entonces es posible utilizar NPM (**Node Package Manager**) para manejar los paquetes.

- En este caso, utilizaremos uno muy parecido que se llama **NPX** que no es más que un **NPM** pero EXecutable.

- Veamos cómo crear un proyecto entonces:

1. En una consola ubicada en la carpeta de nuestro proyecto, ejecutaremos el comando: ``` npx create-react-app [nombre-de-mi-proyecto]```. Al poner el nombre debe ser todo en minuscula, sin mayusculas, sin caracteres especiales, si hay mas de una palabra y las quiero separar lo hago con -, no se pueden dejar espacios en blanco.

2. Esperamos a que aparezca el mensaje "Happy hacking"

3. Entramos a nuestra carpeta y ejecutamos ```npm start```

- Tips que hay que tener en cuanta al dar el nombre al proyecto:

-no se pueden dejar espacios

-debe der todo en minuscula

4. Crate React App va a crear un repositorio de GitHub



:star: **Creando un proyecto con Vite**:

1. Para crear un proyecto con **Vite** en lugar de **CRA** es necesario que se ejecute el comando:

```npm init vit@latest [nombre-de-mi-proyecto] ```

2. Para continuar debemos ingresar a la carpeta creada utilizamos:

```cd [nombre-de-mi-proyecto]```

---

## Instalamos dependencias

Dentro de la carpeta del proyecto, instalamos las dependencias : ```npm install```

---

## Lanzamos la aplicación

Ahora lanzamos nuestra aplicación: ```npm run dev```


---

## Relacionando mi proyecto a un repositorio

Con create-react-app se me crea un repositorio de git

```
> git status
```

Para relacionarlo con el mio:
```
> git remote add origin [la url de github]
```

Para ver si ya esta vinculado:
```
> git remote -v origin 
```

Para commitear:
```
> git commit -m "mi mensaje"
> git push origin master
```

---
## 3. Estructura de carpetas

```
>node_modules
>public
>src
 .gitignore
  README:md
  package-lock.json
  package.json
``` 
 
Es super importante que en **.gitignore** tenga **node_modules** asi no se sube a GitHub, y al bajarlo nuevamente siempre correr ```npm install``` para que me descargue los modulos (**instalo las dependencias**, es decir bajo las librerias).

---

## Instalar las dependencias

```npm install```

Asi me va a bajar todo el paquete de node_modules

---

### Tarea:

1. Buscar la diferencia entre **libreria** y **framework**, ¿que le falta a React para ser considerado un Framework? ¿ Por qué es ventaja que sea una librería?

Un **framework**, al ser un entorno de trabajo, puede contener varias librerías. Mientras una **librería** simplemente es un conjunto de elementos que te resuelve el laburo, por ej functions, classes, etc.

React por sí mismo es una librería y no un framework, puesto que se ocupa de las interfaces de usuario. Sin embargo, diversos añadidos pueden convertir a React en un producto equiparable en características a un framework

2. Crear un proyecto y subirlo

3. Clonar un repositorio y agregar las dependencias

---
---

# :star: Clase 21 y 22 * 22 y 24 de Agosto *  10. Sintaxis y estructura de proyectos en React /  11. Programación funcional

---

## Temas a ver:

1. Armando el scaffolding

2. ¿Cómo creamos componentes en React ?

3. JSX

4. Llamando a los componentes

5. Apendiendo a instalar dependencias

---

## npm

Está en esta web [https://npmjs.com](https://npmjs.com) para poder instalar dependencias, tanto para **React** como para  **Nodejs**.

Es similar a un **CDN** como cuando usamos Bootstrap que linkeamos al CSS y al JavaScript de React, pero en React lo hacemos con **npm**. El tema de la CDN es que se va actualizando cada vez que tenga una nueva versión, y me puede traer problemas en mi proyecto, por esto es que al utilizar en **npm** podemos decir que versión usaremos y va a quedar esa, no se me va a actualizar automáticamente.

Esto ya lo usamos con **axios** cuando hicimos el CheckPooint #1.

- Algunas librerías que se utilizan:

-**React-Bootstrap**

-[**Material UI**](https://mui.com/) -ya creada en componentes-. Ya utiliza sintaxis de React y está orientado a componentes, creando UI. Se utiliza bastante Skeleton.

-**Tailwind**, Muy buena sintaxis 

-**Chakra UI**

-[**Reactstrap**](https://www.npmjs.com/package/reactstrap) - [https://reactstrap.github.io/?path=/story/home-installation--page](https://reactstrap.github.io/?path=/story/home-installation--page)- Es Bootstrap adaptado a React. Actualmente trabajan con Bootstrap 5.

-SASS para React. También se puede utilizar

---

## Scaffolding

Una de las cosas más importantes a tener en cuenta a la hora de trabajar en un proyecto de React es tener un espacio de trabajo cómodo.

Es por ello que vamos a limpiar nuestro proyecto de lo archivos que por el momento no vamos a utilizar.

-> Los archivos de test los utilizaremos más adelante.

1. Primero creo mi proyecto en React **my-app** con ```npx create-react-app my-app```.

Se puede ver en [my-app](https://github.com/eugenia1984/Avalith-React/tree/main/my-app)

2. Vamos a eliminar:

```
App.text.js
index.css
logo.svg
reportWebVitals.js
setUpTests.js
logo192.png
logo512.png
robots.txt
manifest.json
App.css
```

Y nos va a quedar:
```
> node_modules
> public
  favicon.ico
  index.html
> src
  App.js
  index.js
.gitignore
package-lock.json
package.json
README.md
```

-> **package.json** es donde está toda al configuración del proyecto

-> **package-lock.json** son las configuraciones que hace node-modules para poder funcionar

-> El **index.html** Solo tiene el ```<div id="root"> </div> ``` que va a renderizar mis componentes (que están llamandose en el **index.js** con el componente **App**). Se me está creando un **codo** que es el **div** con el id **root**.

También ```<noscript>You need to enable JavaScript to run this app.</noscript>``` que avisa en el caso de que esté desactivado JavaScript en el navegador.


-> **index.js**:

Se crea una variable llamada **root**, con **ReactDOM** utiliza el metodo **.createRoot()** y le pasa como parametro el elemento por id **root** (o sea al div que tenemos en el index.html con el id="root").

Y con el método **.render()** me va a renderizar lo que tengo en el componente **App** (del archivo App.js).

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

#### :star: Componente

-> **App.js**:

Es un **componente funcional** (un componente que se desprende de una función).

```JavaScript
// Arriba del componente van los IMPORT

// En el medio declaramos nuestro COMPONENTE FUNCIONAL con lo que debe renderizar y la logica que tiene
function App() {
  return (
    < >
      <h1>CheckPoint #2</h1>
    </>
  );
}

// Al final van los exports
export default App;
```

-Tengo la funcion **App** que tiene un **return** con **un solo div padre** que es mi ```<> </>```, JSX me da error si tengo más de un div, por eos utilizo el **fragmento**.

-**export** como para cuando trabajo con los modulos en JavaScript vanilla, **export** es una palabra reservad que me permite exportar mi componente para poder utilizarlo en otro lado (utilizando el **import**).

Hay 2 tipos de export...

...**export default App;** : exporta el componente **app**para usarlo en otro archivo. En ese otro archivo se puede importar con el nombre **App** o le puedo poner un **alias**(se lo cambio al importarlo).

...**export**: exporta el componente para utilizarloe n otro archivo y debo **invocarlo con el mismo nombre que en el export** y llamarlo entre **{}**. Y lo voy a utilizar adelante de mi componente funcional:
```JavaScript
export function App() {...}
```
Entonces en el import voy a tener que utilizar le mismo nombre y ponerlo entre llaves:
```JavaScript
import { App } from "./App";
```


-Si la tuviera como **arrow function para el componente**:

```JavaScript
const App = () => {
 return (
    < >
      <h1>CheckPoint #2</h1>
    </>
  );
}
```


-> Desde el **src** creo la carpeta **componentes** (components) donde voy a tener mis componentes funcionales.

Y voy a crear mi primer componente, el nombre debe estar en **PascalCase**, le ponemos *TukiComponents.js*:

```JavaScript
const TukiComponents = () => {
  return (
    <div>
      <h2>Tuki components</h2>
  </div>
  )
};

export default TukiComponents;
```

Por buena práctica mi archivo debe llamarse igual que la constante y que el nombre con que la exporto.


Y la renderizo en **App.js**:

```JavaScript
import TukiComponents from "./components/TukiComponents";

function App() {
  return (
    <div className="App">
      <h1>La primer práctica con React en la Skill Factory de Avalith</h1>
      <TukiComponents />
    </div>
  );
}

export default App;
```

Al abrir ```<``` y comenzar a escribir Tuki ya me va a autocompletar ```<TukiComponents />``` y me va a importar ```import TukiComponents from "./components/TukiComponents";```(por las dudas me fijo que este bien llamada la ruta, aca no es necesario aclara que es un archivo .js).

---

3. Ahora al ejecutar ```npm start``` el navegador nos arrojará muchos errores. Vamos a solucionarlos siguiendo la ruta que nos muestra el error. 

Si voy a *http://localhost:3000* no me va a correr sino dar esos errores

React tiene **hot reload** cada vez que hago un cambio se vuelve a compilar

---

### :star: JSX


JavaScript XML permite utilizar HTML y JavaScript juntos. Me permite utilizar lenguaje de marcado dentro de una función en React.

Si el proyecto lo creamos con Vite, para los componentes que tiene HTML incrustado debemos utilizar la extension **.jsx**.

Si por ejemplo hacemos un fetch a una APi utilizamos .js ya que no tenemos nada para renderizar(retornar).

Para tener onsistencia si para algún componente necesito que tenga la extension .jsx entonces TODOS los componentes van a tener la extension .jsx.

---

### :star: React Bootstrap

En [https://react-bootstrap.github.io/](https://react-bootstrap.github.io/) voy a **get started** e instalo mi primer **dependencia**:

```npm install react-bootstrap bootstrap```

En realidad me voy a instalar 2 dependencias: **react-bootstrap** y **bootstrap**.

Y si ahora voy a mi package.json voy a ver en las dependencies:
```
"bootstrap": "^5.2.1",
"react-bootstrap": "^2.5.0",
```

Lo bueno es que ya me instalo el Bootstrap versión 5 asi que puedo usar grid :)


Y para que me funcione debo agregar el css de Bootstrap a mi proyecto (puede ser en el **index.js** o en el **App.js**, como buena practica lo ponemos dentro del index.js para que abarque todo):

```JSX
{/* The following line can be included in your src/index.js or App.js file*/}
import 'bootstrap/dist/css/bootstrap.min.css';
```

Y si ahora voy a mi navegador ya veo que el font-size cambio al de Bootstrap.


```HTML
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>
```

Si quiero customizar Bootstrap lo hago por SASS:

```
/* The following block can be included in a custom.scss */

/* make the customizations */
$theme-colors: (
    "info": tomato,
    "danger": teal
);

/* import bootstrap to set changes */
@import "~bootstrap/scss/bootstrap";
```

Y lo importo en el archivo main SASS:
```
/* The following line can be included in a src/App.scss */
@import "custom";
```

---
---

## :star: Clase 23 *  26 de Agosto *  11. Programación funcional / 12. Hooks


### JSX

Al crear mi componente en la **1er parte** voy a tener la **lógica del componente** (con variables, objetos, arrays, funciones, fetch, asincronismo, map(que tambien puede estar en la parte del render), hooks, etc.) y en la **2da parte** voy a tener el **return** que me devuelve lo que voy a ver en el **DOM** y va a tener las clases de CSS de este modo **className="App"**.


-> Es un archivo **JSX**, es la conjunción de **JavaScript** y **XML** (dentro del componente utilizamos las etiquetas HTML) y dentro del return voy a poder ejecutar JavaScript.

-> **Componente funcional** es un **componente** de **React** que es una **función de JavaScript** que me permite **ejecutar lógica de JavaScript** y que además me **retorna contenido que puedo ver en el DOM**.

#### Agregamos estilos

-> Utilizamos **className** porque **class** es una palabra reservada para los componentes de clases y la clase la pongo en camelCase.

Dentro del **src** creo una carpeta llamada **styles** y dentro del mismo el archivo **styles.css**. Entonces en mi archivo le doy un forndo rojo a mi className App:

```CSS
.App {
  background-color: red;
}
```
Y ahora lo tengo que linkear, tengo dos opciones...

... Tener una sola carpeta STYLES con UNA SOLA HOJA DE ESTILOS PARA TODO EL PROYECTO.

... dentro de mi carpeta COMPONENTES tener un DIRECTORIO que va a tener el COMPONENTE + SU CSS.

Entonces en el **index.js** (podría importarlo dentro de **App.js** también o si lo hago del cmodo de cada css por componente se importar en su componente correspondiente) le linkeo mi hoja de estilos

```JavaSCript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

### Componentes padres y Componentes hijos

Puedo tener un **componente padre** que dentro tenga **componentes hijos**.


Ahora me voy a crear un nuevo componente llamado **TukiChild.js** que será comonente hijo de **TukiComponents.js**.


TukiChild.js:

```JavaScript
const TukiChild = () => {
  // la parte logica
  console.log("Tuki Child");
  // lo que se renderiza
  return(
    <div>
      <p><strong>TukiChild</strong></p>
      <p>Soy hijo de TukiComponents y nieto de App.</p>
    </div>
  );
};

export default TukiChild;
```

TukiComponents.js (el componente padre de TukiChild):
```JavaScript
import TukiChild from "./TukiChild";

const TukiComponents = () => {
  // la parte logica
  console.log("Tuki Components");
  // lo que se renderiza
  return (
    <div className="containerTukiComponents">
      <h2>Tuki components</h2>
      <TukiChild />
  </div>
  )
};

export default TukiComponents;
```

-> App -> TukiComponents -> TukiChild

En consola veo primero el TukiCOmponentas y luego el TukiChilds, como es de un solo hilo va como en cascada del componente abuelo al hijo y al nieto.


style.css
```CSS
.App {
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.containerTukiComponents {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
```

---

## Tree DOM React

La App se carga una sola vez, al principio.

Es reactivo, se me carga el **virtual DOM**, es decir una copia del DOM, y en cada cambio que voy haciendo en el proyecto voy desde el **estado original** y se me va a cambiar solo lo que modifico, el resto que queda igual no se va a volver a cargar, solo recarga el nodo que se modifica. Es decir hay **rerender**.

---

### Agregamos lógica al componente

Voy a utilizar la logica de JavaScript para poder renderizar con JSX voy a poder inyectar variables y funciones de JS dentro del render, para lo cual voy a utilizar las **{}**.

```JavaScript
const TukiChild = () => {
  console.log("TukiChild");
  let contador = 0;
  console.log("contador: ", contador);

  return(
    <div className="TukiChild">
      <p><strong>TukiChild</strong></p>
      <p>Soy hijo de TukiComponents y nieto de App.</p>
      <p>Contador: {contador}</p>
    </div>
  );
};

export default TukiChild;
```

Y se me va a renderizar: **Contador: 0** o sea que se me ve la variable.

Ahora vamos ahacer que esa variable se modifique:

```JavaScript
const TukiChild = () => {
  console.log("TukiChild");
  let contador = 0;

  const increase = () => {
    contador++;
    console.log('contador: ', contador);
  }

  return(
    <div className="TukiChild">
      <p><strong>TukiChild</strong></p>
      <p>Soy hijo de TukiComponents y nieto de App.</p>
      <p>Contador: {contador}</p>
      <button onCLick={increase}>Click Me!</button>
    </div>
  );
};

export default TukiChild;
```

---

#### :star: Hook y useState

-> En el console.log voy a ver como se me va a actualizar el contador, pero en lo que estoy renderizando no, siempre veo el **0**, veo siempre el valor inciial de la variable y no actualiza el valor del DOM, para modificarlo utilizamos un **HOOK** para controlar el **estado**, esto pasa porque el valor no lo uso (no lo uso como el innerHTML y lo inyecto en el HTML).

Voy a tener mi contador (**count**) y además la función **setCount** que será un **setter function**(me va a settear el estado del contador) y voy a tener que invocar al **useState**.

¿Qué tengo en mi array ?

1. estado del componente

2. función setter

El **useState** me muestra el valor inicial., el cual puede ser un 0, un String, un Array vacío, le puedo pasar un objeto que tenga una key contador con value 0.

-> el useState es nativo de React.

-> **setCount** me setea el valor del estado + 1.

-> El boton **onClick** escucha el evento (cuando le hago click) y ejecuta la funcion increase.

```JavaScript
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
```

---
---

## :star: Clase 24 * 29 de Agosto *  11. Programación funcional / 12. Hooks

---

## Realizamos este ejercicio:


1. Al contador de clics que desarrollamos hoy, agregarle una función llamada **decrease** que reste la cantidad de clics del estado. 

Debe renderizar números negativos inclusive.

-> agrego la funcion **increase** y el boton con el onClick **decrease**:

```JavaScript
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
  // Function to decrease the count
  const decrease = () => {
    setCount(count-1);
  }

  return(
    <div className="TukiChild">
      <p><strong>TukiChild</strong></p>
      <p>Soy hijo de TukiComponents y nieto de App.</p>
      <p>Contador: {count}</p>
      <button onClick={increase}>Click Me to increase!</button>
      <button onClick={decrease}>Click Me to Decrease!</button>
    </div>
  );
};

export default TukiChild;
```

2. Declarar un estado a través de un hook que tenga una variable llamada **info** junto con su setter correspondiente. 

-El **estado inicial** debe ser un objeto con dos keys: **name** y **age**.  

-La **key name** debe tener el nombre de ustedes en diminutivo (o su apodo). 

-El **setter** debe ejecutarse **cliquear un botón** llamado **Change Info**, debe recuperar el **estado inicial** y debe **cambiar el nombre en diminutivo (o apodo) por el nombre completo y debe agregar la key lastName con su correspondiente valor**. 

Por ejemplo, en mi caso, el objeto inicial quedaría como: **{ name: "Fabi", age: 28 }** y luego del seteo del estado debe quedar **{ name: "Fabián", age: 28, lastName: Tureo }**. 

-Mostrar el estado del hook por consola.

-> Agrego el estado **info**
```JavaScript
 const [info, setInfo] = useState({name: 'Euge', age: 38});
```

-> Agrego la función para cambiar la información, pero primero debo recuperar la información incial (con un spread operator) : ``` setInfo({...info, name: 'Eugenia'});``` entonces si existe una key dentro de info que se llamae name me va a remplazar el value por Eugenia y le agrego la key lastName con el apellido.

```JavaScript
// Function to set the name of the user
const changeInfo = () => {
  setInfo({...info, name: 'Eugenia', lastName: 'Costa'});
}
```

-> De este modo **controlamos estados y no mutamos la información original**. **Creamos un nuevo estado**.


-> Agrego el boton de **change info**:
```JavaScript
<button inclick={changeInfo}>Change info</button>
```


3. Declarar un estado que tenga una variable llamada loading junto con su setter correspondiente. 

-El estado inicial debe ser false y al cliquear un botón llamado Change Loading debe cambiar al contrario del estado. 

-Si inicia en false, debe cambiar a true y si está en true, debe cambiar a false.  

-Mostrar el estado del hook por consola.

-> agrego el estado **loading**
```JavaScript
const [loading, setLoading] = useState(false);
```

-> Agrego la función para cambiar el estado, en este caso por mdio de una **negación** (**NOT/!**) lo voy a ir intercambiando treu/false/true/false..

```JavaScript
  const handleLoading = () => {
    setLoading(!loading);
  }
```

-> Agrego el boton:
```JavaScript
<botton onClick={handleLoading}>Loading</botton>
```

4. Declarar un estado que tenga una variable llamada **animals** junto con su setter correspondiente. 

El estado inicial debe ser un array con un elemento de tipo string y cuyo valor sea "Raccoon" (Aguanten los Guardianes de la Galaxia :cohete:). 

Al ejecutar el seteo del estado a través de un botón llamado Add Animals, se debe conservar el primer elemento y se debe agregar un array de cinco animales que puede estar guardado en una variable extra o no. 

El resultado final debe mostrarse por consola y debe contener un array de seis elementos.

-> declaro el estado con la variable **animal**:

```JavaScript
const[animals, setAnimals] = useState(['Racoon']);
```

Primero declaro una variable que guarda un array de animales (**animalsArray**) y luego creo la funcion para agregar los animales, para lo que voy a utilizar el **spread operator**:
```JavaScript
const animalsArray = ['Cat', 'Dog', 'Elephant', 'Duck', 'Cow'];
const addAnimals = () =>  {
    setAnimals([...animals, ...animalsArray]);
  }
```


Y para controlar que solo me los agregue una vez y luego no vuelva a agregar le mismo array:
```JavaScript
const animalsArray = ['Cat', 'Dog', 'Elephant', 'Duck', 'Cow'];
// set the animals array
const addAnimals = () =>  {
  animals.length === 1 && setAnimals([...animals, ...animalsArray]);
}
```

Es como un ternario solo que primero evalua que tenga al longitud de un solo elemento y al tener el **&&** si ese es true sigue con la otra perta que es agregar el array de animales.


Sino con un simple if lo resolvia:
```JavaScript
const animalsArray = ['Cat', 'Dog', 'Elephant', 'Duck', 'Cow'];
// set the animals array
const addAnimals = () =>  {
  if(animals.length === 1) {
    setAnimals([...animals, ...animalsArray]);
  }
}
```

-> Y agrego el boton para agregar los animales

```JavaScript
<button onClick={addAnimals}>Add animals</button>
```

---
---


### Para no tener tantos botones juntos, voy a pasar mi boton del count a un componente  Count.js

- En mi **App.js** lo llamo:

```JavaScript
import Count from "./components/Count";
import TukiComponents from "./components/TukiComponents";

const App = () => {
  return (
    <div className="App">
      <h1>La primer práctica con React en la Skill Factory de Avalith</h1>
      <TukiComponents />
      <Count />
    </div>
  );
}

export default App;
```

- Count.js:
```JavaScript
import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const stock = 10;

  // Function to increase the count
  const increase = () => {
    count < stock && setCount(count+1);
  }
  // Function to decrease the count
  const decrease = () => {
    setCount(count-1);
  }

  return(
    <div>
      <p>Count</p>
      <p>TukiCount: {count} Tukis!</p>
      <button onClick={increase}>Click Me to increase!</button>
      <button onClick={decrease}>Click Me to Decrease!</button>
    </div>
  );
};

export default Count;
```

-> Y asi voy a ir **componentizando** mi aplicación.

### :star: Paso de props

-> Ahora si el nieto hace algo no va a modificar el Estado dle padre, en React hay unidirección se modifica desde el padre hacia los hijos, no desde los hijos hacia los padres. Lo único que si me lo va a permitr hacer son los **eventos**.

-> Necesito que los componentes estén conectados, que un Padre le pueda enviar información al Hijo y que el Hijo le pueda enviar información al Padre.

Podría en mi componente **Count** tener la variable stock para que no me pase al agregar los items del stock disponible, pero si por ejemplo tengo como 500 productos, esto ya es medio complicado manejarlo asi.


Entonces en el **App.js** le paso a mi componente **count** unas **props**(propiedad) que esté disponible cuando app llama a Count y este invoca a las funciones. Y también me copio el array de animales:
```JavaScript
const App = () => {
  const animalsArray = ['Cat', 'Dog', 'Elephant', 'Duck', 'Cow'];

  return (
    <div className="App">
      <h1>La primer práctica con React en la Skill Factory de Avalith</h1>
      <TukiComponents />
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
```

Y **Count.js** va a ser usod e esa prop como parametro en la arrow function **props** que va a ser la prop **id** que vale **1**. Y va a recibir como segundo parametro la segunda **prop** **stock** con valor **10**. Y como tercar parametro un valor **initial** de **1**. Y como cuarta un **userName** de valor **"Euge"** y el **animals** con el array de los animales.

Si es String va entre comillas dobles.

Si es un Number va entre {}. Entre {} también se le puede pasr: arrays.

-> Puedo usar **destructuring**:
```JavaScript
import TukiChild from "./TukiChild";

// Hago un destructuring de las props para poder utilizarlas sobre el componente
const TukiComponents = ({ animalsArray}) => {
  const { animalsArray } = props;

  return (
    <div className="containerTukiComponents">
      <h2>Tuki components</h2>
      <TukiChild />
    </div>
  )
};

export default TukiComponents;
```

-> O sino las nombre con **props.**nombre:
```JavaScript
import { useState } from "react";

const Count = (props) => {
  console.log("Las props en Count: ", props);

  console.log("El stock es: ", props.stock);
  console.log("El initial es: ", props.initial);
  console.log("El username es: ", props.userName);
  console.log("El id es: ", props.id);
  console.log("Los animales: ", props.animalsArray);
}
```

**Apps.ja** le pasa animalsArray a **Tuki COmponents**:
```JavaScript
<TukiComponents animalsArray={animalsArray} />
```

**TukiCompponents.js** las recibe, por eso tengo **props**:
```JavaScript
import TukiChild from "./TukiChild";

const TukiComponents = (props) => {

  return (
    <div className="containerTukiComponents">
      <h2>Tuki components</h2>
      <TukiChild animalsArray={props.animalsArray} />
    </div>
  )
};

export default TukiComponents;
```

Y se las pasa a su hijo **Tuki Child**:
```JavaSCript
import { useState } from 'react';

const TukiChild = (props) => {
  console.log("Las props de TukiChild: ", props);

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
  //const animalsArray = ['Cat', 'Dog', 'Elephant', 'Duck', 'Cow'];
  // set the animals array
  const addAnimals = () =>  {
    animals.length === 1 && setAnimals([...animals, ...animalsArray]);
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
```

Si en vez de utilizar el props utilizaba el destructuring {animalsArray} al pasar el parametro entonces al el componente TTukiShild podía directamente utilizar {animalsArrays} sin tener que usar props.

-> **Mediante las props le puedo pasar información de un padre hacia un hijo**.

---
---

## Tarea: 

1. Crear un componente llamado **ItemListContainer** que sea llamado por **App.js** .

Debe recibir una **prop** llamada **nameEcommerce** y debe renderizarse como el título de una Tienda Ficticia.

2. Crear un Componente Llamado **NavBar** que tenga un hijo llamado **CartWidget**.

CartWidget debe mostrar el icono de un carrito de compras y NavBar debe ser renderizado desde App.js

3. Crear un componente llamado **ItemCount** y que se renderizará, por ahora, desde ItemListContainer. 

El contador debe recibir dos props: Stock=15 e Initial=1. Usar estas props para realizar las validaciones dentro del contador para que no se supere el stock y además, el contador no debe permitir números negativos.

---
---

## Tarea: 

Realizar un pedido asincrónico al siguiente endpoint: https://fakestoreapi.com/products/. Utilizar el hook useEffect. En principio, utilizar fetch + async/await
Si el pedido entra en un loop infinito, revisar el dependency array.

Guardar los productos en un estado del componente ItemListContainer
Mapear los productos para renderizarlos en el DOM desde el componente mencionado.
Maquetar la vista correspondiente utilizando el camino que consideren apropiado para la estilización.

Anotar las dudas que surjan para poder comentarlas en el encuentro y aclarar todo lo necesario

---
---
# :star: Clase 26 * 02/09

---
---

# :star: Clase 27 * 05/09

---
---

# :star: Clase 28 * 07/09 

---
---
# :star: Clase 30 * 12/09

---
---

## :star2: Proyecto para practicar

### ¡Te elegimos para este proyecto! 

Uno de nuestros clientes necesita resolver una situación pero aún no se decide  con  qué  tecnología  hacerlo.  No  obstante  y  para  optimizar  los 
tiempos, te encomendamos lo siguiente:  

- Deberás crear un nuevo proyecto de React utilizando el CLI de CRA.  

- La  aplicación,  en  principio,  debe  contar  con  tres  componentes principales, además de App:

o Task 

o TaskList 

o TaskForm 

- En esta ocasión, el cliente ha decidido solicitar que cada archivo .js (o .jsx) tenga su propia  hoja de estilos, por lo que deberás 
alojarlas en una carpeta llamada styles.  

- Deberás elegir una imagen que será la cabecera del producto. Esta imagen,  por  el  momento,  será  a  elección  y  te  indicaremos  dónde 
colocar cuando se presente el mockup 

- Cada tarea deberá tener un ID único. Como aún no está preparado el backend, deberás resolver este problema para que luego solo quede 
la integración por resolver.  

- Estamos  trabajando  con  los  mejores  estándares  de  codificación  por lo que necesitamos que todo esté escrito con las implementaciones 
de ECMA6 y posteriores (funciones, destructuring, entre otros).  

- Antes de que nuestro cliente se decida con qué tecnología trabajar, deberás conectar los componentes y sus eventos por medio de props. 
Veremos cómo manejar esto más adelante.  

- Este  proyecto  debe  permitir  crear  nuevos  ítems,  debe  permitir borrarlos  y  debe  generar  algún  cambio  en  la  UI  cuando  estén 
completos.  El  cliente  está  evaluando  la  posibilidad  de  hacer  un update  del  proyecto  hacia  un  CRUD  pero  aún  no  nos  ha  solicitado 
nada al respecto.  

- Por  último,  deberás  implementar  un  formulario,  el  cual  estará vinculado con la creación de los ítems. No olvides crear un handler 
para guardar esa información y mostrarla en la UI 
 
-> Debe ser responsivo

¡Éxitos y te mantenemos al tanto de las nuevas features por desarrollar!

---
---

# :star: Clase 31 * 14/09 


## :star: Redux

[https://redux.js.org/](https://redux.js.org/)


- **Route map**:  React -> Redux -> REdux ToolKit
 
- Otras opciones: **MobX**, **Flux** (utliza el MVC con hilo simple), **REdux ToolKit** (maneja el estado de manera diferente)

---
---

## Redux

- **single principle** cada componente tiene una tarea principal.

REDUX
```
     r e d u c e r s
     /             \
return type        update
and actions         state
  /                    \
 /                      v
actions                Store
```

- App llama a ComponenteA, el cual llama a ComponenteB, el cual llama a ComponenteC, el cual llama a ComponenteD. Y nos queda paracido al callback Hell (**prop Hell**)

```
APP
|--------------------------------------------------------|
|  |--------------------------------------|              |
|  |                       |--------|     |              |
|  |                       |  cart  |     |              |
|  |                       | widget |     |              |
|  |                       |--------|     |              |
|  |                                      |              |
|  |--------------------------------------|              |
|                                             STORE      |
|  |-------------------------------------|               |
|  |       ComponenteA                   |               |
|  |  |-------------------------------|  |               |
|  |  |    ComponenteB                |  |               |
|  |  | |------------------------|    |  |               |
|  |  | |    ComponenteC         |    |  |               |
|  |  | | |-------------------|  |    |  |               |
|  |  | | |   ComponenteD     |  |    |  |               |
|  |  | | |     ITEM          |  |    |  |               |
|  |  | | |-------------------|  |    |  |               |
|  |  | |------------------------|    |  |               |
|  |  |-------------------------------|  |               |
|  |-------------------------------------|               |
|                                                        |
|--------------------------------------------------------|
```


- Voy a tener **variables** guardadas en **memoria** que van a estar en el **store** el cual abarca toda al aplicación, por lo cual todos los componentes van a poder acceder a él.

- store me guarda la **informacion global** y cada componente va  atener sus **props** propias.

- La app no debe recargarse, sino se me borra lo que tengo en el Store.

- ayuda en los componentes adyacentes

---
---

### Lo que se espera que sepa un React Developer

- JavaScript (local storage)

- Asincronismo

-  Manejar estados de Context

- Con las respuestas del asincronismo y el estado puedas renderizar esa informacion

- Cookies

- Lazy loading, suspense, otros hooks (pero esto ya es más avanzado).

- Next.js

- Nestjs.com (es para el back end, para Node.js)

---
---
