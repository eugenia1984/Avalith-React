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


## :star: Tarea: 

1. Crear un componente llamado **ItemListContainer** que sea llamado por **App.js** .

Debe recibir una **prop** llamada **nameEcommerce** y debe renderizarse como el título de una Tienda Ficticia.

2. Crear un Componente Llamado **NavBar** que tenga un hijo llamado **CartWidget**.

CartWidget debe mostrar el icono de un carrito de compras y NavBar debe ser renderizado desde App.js

3. Crear un componente llamado **ItemCount** y que se renderizará, por ahora, desde ItemListContainer. 

El contador debe recibir dos props: Stock=15 e Initial=1. Usar estas props para realizar las validaciones dentro del contador para que no se supere el stock y además, el contador no debe permitir números negativos.

#### Punto 1

- Creamos el componente **ItemListContainer**

```JSX
const ItemListContainer = (props) => {
  return (
    <div>
      <h2>Bienvenidos a {props.nameEcommerce}</h2>
    </div>
  );
}

export default ItemListContainer;
```

- Recibo por props de App el nombre del E-Comemrce.

- Lo importamos y renderizamos en App.js. Le asignamos la prop **nameEcommerc** con el valor de **"E-Commerce Example"**:

```JSX
import Count from "./components/Count";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  const animalsArray = ['Cat', 'Dog', 'Elephant', 'Duck', 'Cow'];

  return (
    <div className="App">
      <h1>La primer práctica con React en la Skill Factory de Avalith</h1>
      <ItemListContainer nameEcommerce="E-Commerce Example"/>
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
```

#### Punto 2

- Creamos el componente **NavBar**

```JSX
const NavBar = () => {
  return (
    <nav>
      <h2>NavBar</h2>
    </nav>
  );
}

export default NavBar;
```

- Lo importamos y renderizamos desde App.js:

```JSX
import Count from "./components/Count";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {
  const animalsArray = ['Cat', 'Dog', 'Elephant', 'Duck', 'Cow'];

  return (
    <div className="App">
      <h1>La primer práctica con React en la Skill Factory de Avalith</h1>
      <NavBar />
      <ItemListContainer nameEcommerce="E-Commerce Example"/>
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
```

- Creamos al componente hijo de NavBar, llamado **CartWidget**

```JSX
const CardWidget = () => {
  return (
    <>
      <h2>CardWidget</h2>
    </>
  );
}

export default CardWidget;
```

- Como CardWidget es hijo de NavBar lo renderizo ahi, para lo cual tengo que importarlo:

```JSX
import CardWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h2>NavBar</h2>
      <CardWidget />
    </nav>
  );
}

export default NavBar;
```


- Y como me pedia que se vea el icono dle carrito:

```JSX
const CardWidget = () => {
  return (
    <>
      <img 
        src="https://img.icons8.com/cute-clipart/32/000000/shopping-cart.png" 
        alt="shopping cart icon"  
        width={32}
        height={32}
      />
    </>
  );
}

export default CardWidget;
```

- Y para darle algo de estilos voy a mi CartWidget y al div que engloba a mi nav le doy la clase **NavbarContainer** y le agrego estilo:

```CSS

.navbarContainer {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
```

Asi aparecen uno al aldo del otro.

- Y dentrod e CartWidget a la etiqueta de la imagen le agrego la clase llamada **imageCart** y le agrego CSS:

```CSS
.imageCart {
  width: 32px;
  height: 32px;
}
```

- Para que quede mas presentable la Navbar la vamos a usar con React Bootstrap desde [https://react-bootstrap.github.io/components/navbar/](https://react-bootstrap.github.io/components/navbar/) me la copio.

Para los import puedo tener:

```JSX
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
```

O lo simplifico en:

```JSX
import { Container, Nav, Navbar, NavDropdown  }from 'react-bootstrap/';
```

```JSX
import CardWidget from "./CartWidget";
import { Container, Nav, Navbar, NavDropdown  }from 'react-bootstrap/';

const NavBar = () => {
  return (
    <div className="navbarContainer">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><h2>Navbar</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Products</Nav.Link>
              <NavDropdown title="Options" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Category 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Category 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Category 3</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CardWidget />
    </div>
    
  );
}

export default NavBar;
```


#### Punto 3

- Aprovecho el contador que ya tenia y le cambio el nombre a Item o copio el mismo codigo en el nuevo componente.

```JSX
import { useState } from "react";

const ItemCount = (props) => {
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
      <button onClick={increase}>Click Me <br/> to increase!</button>
      <button onClick={decrease}>Click Me <br/> to Decrease!</button>
    </div>
  );
};

export default ItemCount;
```

- ItemCount debe ser llamado desde ItemListContainer:

```JSX
import ItemCount from "./ItemCount.js";

const ItemListContainer = (props) => {
  console.log("Las props de ItemListContainer: ", props);

  return (
    <div className="tukiStore">
      <h2>Bienvenidos a {props.nameEcommerce}</h2>
      <ItemCount 
        stock={15} 
        initial={1} 
      />
    </div>
  );
}

export default ItemListContainer;
```

- Le doy la clase tukiStore para ponerle otro color de fondo y diferenciarlo del otro componente.

- Vuelvo a IemCount para pasar en vez de props por parametro, le paso el objeto desestructurado, y ademas le sumo las validaciones para que no sume más items que el stock disponible y que no reste hasta números negativos.

```JSX
import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(0);

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
      <button onClick={increase}>Click Me <br/> to add!</button>
      <button onClick={decrease}>Click Me <br/> to quit!</button>
      <button>Add <br/> to Cart</button>
    </div>
  );
};

export default ItemCount;
```

- Agrego otro boton para a futuro agregarlo al carrito

- Agregamos asincronismo y utlizamos un nuevo hook ...

## :star: useEffect (hook)

- Permite generar efectos secundarios que quiero que ocurran una ve que ocurra el render.

- Vamos a usar useEffect para hacer un pedido a una API.

- APi a usar: [https://fakestoreapi.com/](https://fakestoreapi.com/)

- En ListItemContainer:

importo:
```JSX
import { useState, useEffect } from "react";
```

lo uso:
```JSX
const [ products, setProducts ] = useState([]);
```

Lo seteo como un array vacio porque lo voy a llenar con lo que me va a traer mi pedido a la API

- useEffect se ejecuta cuando...

... **se carga por primera vez un componente en el DOM**.

... **cuando se actualiza el componente**

- Sintaxis del useEffect:

```JSX
useEffect( () => {
    getProducts();
}, [])
```

Tiene 2 parametors:

1. callback

2. **array de dependencias del useEffect**, al tenerlo vacío le decimos que se ejecute uan sola vez.

- Pido los productos al la API, los traigo, y ahora esa data tengo que mandarla al array:

```JSX
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
    </div>
  );
}

export default ItemListContainer;
```

- Ahora products arranca en un array vacio, espera el pedido de la API, y cuando ya tiene la respuesta rellena con los productos.

- la dependencia queda en el listener y si eso cambia ejecuta el useEffect, y si hay cambio lo renderiza.


Y ahora como los productos los tengo en un estado los puedo mapear y en cada iteracion obtengo un producto


### :star: PETICION A LA API CON ASYNC - AWAIT 

```JSX
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
```


---
---

# :star: Clase 25 * 31/08 * 11. Programación funcional / 12. Hooks / 13. Routing

---


## Tarea: 

- Realizar un pedido asincrónico al siguiente endpoint: https://fakestoreapi.com/products/. 

Utilizar el hook useEffect. 

En principio, utilizar fetch + async/await

Si el pedido entra en un loop infinito, revisar el dependency array.

- Guardar los productos en un estado del componente ItemListContainer

- Mapear los productos para renderizarlos en el DOM desde el componente mencionado.

- Maquetar la vista correspondiente utilizando el camino que consideren apropiado para la estilización.

- Anotar las dudas que surjan para poder comentarlas en el encuentro y aclarar todo lo necesario

---

- Es super importante en el segundo parametro, que es el array vacio, avisarle que no se vuelva a ejecutar el useEffect. Sino estoy todo el tiempo consultando a la API, y me puede bloquear la API, no voy a tener control, no va a saber que dependencia escuchar.

1ro se monta el DOM

2do se usa el useEffect

3ro como no tengo el render controlado por el array de dependencias (no tengo el array vacio como 2do param), al no estar controlado se vuelve a ejecutar, y se vuelve a invocar a useEffect y así sucesivamente, y asi se me termina saturando el navegador o la computadora. VOy a tener muy poca performance.


El estado lo guardamos el en useState y en el setProducts le pasamos la data. Y el array que pasamos como 2do param va a ver si hay algo que cambie, con el useState al rpincipio aclaraba como se inicializa el estado.


---

### Vemos como seria con un JSON local en vez de hacer el pedido a la API

- Dentro de **public** me creo la carpeta **JSON**

- Me copio lo que me trae la APi y lo guardo en un archivo **data.json**

- Antes lo pedia a la API:

```JSX
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
```

### PETICION CON ASYNC - AWAIT PERO A UN JSON LOCAL

Ahora se lo pido al JSON que me cree

Me creo la funcion getProductsLocal:

```JSX
const getProductsLocal = () => {
    fetch('../JSON/data.json')
      .then( (response) => response.json())
      .then((data) => setProducts(data));
  };
```

Y la invoco:

```JSX
useEffect( () => {
  getProductsLocal();
}, []);
```

### PETICION A LA API CON FETCH Y THEN

```JSX
const getProductsFetchThen = () => {
  fetch('https://fakestoreapi.com/products/')
    .then( (response) => response.json())
    .then((data) => setProducts(data));
  };

useEffect( () => {
  getProductsFetchThen();
}, []);
```

---

- Con el async - await es más facil declarar, ya le decís que es algo asíncrono. Es más declarativo, espera a que ocurra. Y es más performante.


---

- Cuando se está desarrollando, si el BackEnd no lo tenes y la API todavia no existe, se suele utilizar de este modo, haciendo un mock de la API.

---

### PETICIONES A LAS API CON AXIOS

- Desde [https://axios-http.com/docs/intro](https://axios-http.com/docs/intro) veo la docmuntación.

- ¿ Cómo se instala ?

```$ npm install axios```


- A diferencia de JS vanilla que apuntabamos a la CDN, en React debemos importar la librería: 

```JSX
import axios from "axios";
```


```JSX
const getProductsAxios = async() => {
    const getAxios = await axios.get('https://fakestoreapi.com/products/');
    console.log("get axios: ", getAxios);
    setProducts(getAxios.data);
  }

  useEffect( () => {
    getProductsAxios();
  }, []);
```

- Dentro de **axios** debo seear la info que tengo en **data**

---

- ventajas de axios:

-performance

-muy declarativo


---

### RESOLVEMOS EL PROBLEMA DE LA KEY

- Es muy importante, porque como estamos comparando el DOM con el VIRTUAL DOM, cada producto es distinto, para esto usamos las **key**.

- Con las props le vamos a agregar una key, que debe ser unica, en general se usa a id.

```JSX
{products.map( (product) => {
  return (
    <p key={product.id}>- {product.title}</p>
  )
})}
```

- Existe una lbrería, la **uuid** que se suele utilizar.

- Pero en general las API y las base de datos suelen tener los id.

- Otro modo es utilizar el **index** dentro del **map**:

```JSX
{products.map( (product, index) => {
  return (
    <p key={index}>- {product.title}</p>
  )
})}
```

---

## :star: REACT ROUTER DOM (VERSION 6)

- Web: [https://reactrouter.com/en/v6.3.0/getting-started/overview](https://reactrouter.com/en/v6.3.0/getting-started/overview)


- Instalación: ```npm install react-router-dom@6```


- Ejemplo de implementación CONFIGURANDO EL ROUTING:

```JSX
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
```

- Aclaración:

In previous versions of React Router you had to order your routes a certain way to get the right one to render when multiple routes matched an ambiguous URL. V6 is a lot smarter and will pick the most specific match so you don't have to worry about that anymore. For example, the URL /teams/new matches both of these route:
```JSX
<Route path="teams/:teamId" element={<Team />} />
<Route path="teams/new" element={<NewTeamForm />} />
```
But ```teams/new``` is a more specific match than ```/teams/:teamId```, so ```<NewTeamForm />``` will render.


- Navegación:

```JSX
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>
      </nav>
    </div>
  );
}
```

```JSX
import { useNavigate } from "react-router-dom";

function Invoices() {
  let navigate = useNavigate();
  return (
    <div>
      <NewInvoiceForm
        onSubmit={async (event) => {
          let newInvoice = await createInvoice(
            event.target
          );
          navigate(`/invoices/${newInvoice.id}`);
        }}
      />
    </div>
  );
}
```

- Renderizando URL con PARAMETROS:

```JSX
import { Routes, Route, useParams } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="invoices/:invoiceId"
        element={<Invoice />}
      />
    </Routes>
  );
}

function Invoice() {
  let params = useParams();
  return <h1>Invoice {params.invoiceId}</h1>;
}
```

Note that the path segment ```:invoiceId``` and the param's key ```params.invoiceId``` match up.

A very common use-case is fetching data when the component renders:

```JSX
function Invoice() {
  let { invoiceId } = useParams();
  let invoice = useFakeFetch(`/api/invoices/${invoiceId}`);
  return invoice ? (
    <div>
      <h1>{invoice.customerName}</h1>
    </div>
  ) : (
    <Loading />
  );
}
```

- Puedo tener routings anidados (links hijos de otros)

```JSX
function App() {
  return (
    <Routes>
      <Route path="invoices" element={<Invoices />}>
        <Route path=":invoiceId" element={<Invoice />} />
        <Route path="sent" element={<SentInvoices />} />
      </Route>
    </Routes>
  );
}
```

```
"/invoices"
"/invoices/sent"
"/invoices/:invoiceId"
```

```JSX
<App>
  <Invoices>
    <SentInvoices />
  </Invoices>
</App>
```

---

- En el **index.html** importo **BrowserRouter** y englobo a *App*, asi voy a poder enrutar todo lo que tengo adentro de App:

```JSX
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

- En el *App.js* me voy cuento que el NavBar lo queiro siempre visible y el resto lo puedo enrutar, por eso el NavBar va a estar fuera del ruteo. Me tengo que importar **Routes** y lo utilizo con **Route** (también tengo que importarlo).

¿ Qué indico dentro del Route ?

1. el path, es decir la dirección a la que quiero ir.

2. element, es decir que componente va a renderizar.

Antes, en la versión 5 se llamaba **Switch** en vez de **Route**


```JSX
import Count from "./components/Count";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const animalsArray = ['Cat', 'Dog', 'Elephant', 'Duck', 'Cow'];

  return (
    <div className="App">
      <h1>La primer práctica con React en la Skill Factory de Avalith</h1>
      <NavBar />
      <Routes >
        <Route 
          path="/" 
          element={<ItemListContainer nameEcommerce="Tuki Store" />}
        /> 
        <Route 
          path="/count"
          element={<Count id={1} stock={10} initial={1} userName="Euge" animals={animalsArray} />}
        />  
      </Routes>
    </div>
  );
}
```

-> Ahora en **http://localhost:3000/** voy a ver todo el ItemListContainer

- el **Route** puede ser de autocierre, ya que no tiene nada adentro, mientras que el **Routes*+ debe tener apertura y cierre, ya que dentro tiene a los Route.

- Agrego otro path para el **About**:

```JSX
return (
    <div className="App">
      <h1>La primer práctica con React en la Skill Factory de Avalith</h1>
      <NavBar />
      <Routes >
        <Route 
          path="/" 
          element={<ItemListContainer nameEcommerce="Tuki Store" />}
        /> 
        <Route 
          path="/count"
          element={<Count id={1} stock={10} initial={1} userName="Euge" animals={animalsArray} />}
        />  
        <Route 
          path="/about"
          element={<h2>Work in progress...</h2>}
        />
      </Routes>
    </div>
  );
```

- Me falta ahora hacer los links para que me lleven a estas rutas que estoy creando. La gente por si sola no va a adivinar que path escribir.

- En el **ItemListContainer** tengo que poner la etiqueta **Link**. Para esto la importo:
```JSX
import Link from "react-router-dom";
```

Y la uso ```<Link to="/about">Vamos al About</Link>``, siempre debo indicarle con el **to** la ruta a la que va a ir. Nunca declaro a este link como **href**, porque href se recarga, lo declaro como **Link** asi prevengo la recarga(se pasa al DOM como etiqueta de anchor pero no genera el re render):
```JSX
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
          <p key={product.id}>- {product.title}</p>
        )
      })}
      <Link to="/about">Vamos al About</Link>
    </div>
  );
```

- El link en el DOM lo muestra(transpila) como una etiqueta **a**(anchor, link)

### Redireccionamiento programatico

- ¿Y si alguine me pone cualquier dirección que no esta en mi enrutamiento ? Necesito redireccionar. En las versiones anteriores se llamaba **redirect**. En la versión 6 usamos el *.

```JSX
<Route path="*" element={<h1>Error 404</h1>} />
```

De este modo podria tneer mi pagina de error, peor es mucho más provechoso redirigir al asuario de nuevo a mi pagina de inicio:

```JSX
<Route path="*" element={<ItemListContainer nameEcommerce="Tuki Store" />} />
```

- Por buenas prácticas va a final de todos los Route.

- El # adelante es lo que me evita que se me recargue la pagina.

---

### Queremos renderizar el detalle de los productos

- Creo el componente **ItemList** para pasarle lo que tenemos en ItemListContainer porque podemos empezar a **Componetizar** la App.

-> En **ItemListContainer** lo importo:
```JSX
import ItemList from "./ItemList.js";
```

-> Para renderizarlo:
```JSX
return (
  <div className="tukiStore">
    <h2>Bienvenidos a {props.nameEcommerce}</h2>
    <ItemCount 
      stock={15} 
      initial={1} 
    />
    <h3>Productos:</h3>
    <ItemList productos={products}/>
    <Link to="/about">Vamos al About</Link>
  </div>
);
```

-> **ItemList** lo va a recibir en el parametro como props o lo puedo desestrocturar.


```JSX
import Item from "./Item.js";

const ItemList = ({ products }) => {
  console.log("Productos en ItemList: ", products);
  return (
    <div>
      {products.map((product) => {
        return (
          <Item 
            key={product.id}
            title={product.title}
            price={product.price}
          />
        );
      })}
    </div>
  );
}

export default ItemList;
```

-> Y dentro me va a renderizar otor componente que lo voy a llamar **Item*+ (va a ser como una card), y va a recibir de ItemList las props para la key, el title y el price.:

```JSX
const Item = ({ title, price }) => {
  return(
   <div>
     <h2>{title}</h2>
      <p>{price}</p>
   </div>
  )
}

export default Item;
```

-> Y los transformo en Links
```JSX
import { Link } from "react-router-dom";

const Item = ({ title, price, id, category }) => {
  return (
    <Link to={`/item/${id}`}>
        <div>
          <h1>{title}</h1>
          <h3>{price}</h3>
          <h4>{id}</h4>
          <h5>{category}</h5>
        </div>
    </Link>
  );
};

export default Item;
```

### Param en la URL 

-> Ahora cada vez que hago lick en un Item tendria que ir a la url con ese id, pero.. dentro de App tengo el link /*, me falta aclarar la url con parametro **id**

```JSX
<Route  
  path="/item/:id"
  element={<h2>Work in progree: Item</h2>}
/>
```

---
---

# :star: Clase 26 * 02/09

- Hacer el enrutamiento dinamico

- Arreglar el detalle del producto.

```
|--------------------------------------|
|     APP                              |
|  |--------------------------------|  |
|  | NAVBAR        |------------|   |  |
|  |               | CartWidget |   |  |
|  |               |------------|   |  |
|  |--------------------------------|  |
|                                      |
|  |------------------------------|    |
|  |  Pedido a la API - envio los |    |
|  |  productos por props a la    |    |
|  |  item list                   |    |
|  |                              |    |
|  |  |------------------------|  |    |
|  |  | ITEM LIST - mapea y    |  |    |
|  |  | genera los items       |  |    |
|  |  |                        |  |    |
|  |  | |--------| |--------|  |  |    |
|  |  | | ITEM   | | ITEM   |  |  |    |
|  |  | | DETAIL | | DETAIL |  |  |    |
|  |  | |--------| |--------|  |  |    |
|  |  |------------------------|  |    | 
|  |------------------------------|    |
|                                      |
|--------------------------------------|
```

ITEM DETAIL -> va a tener el detalle del producto, con su id generamos la URL y un enrutamiento dinamico.

-> Necesitamos un nuevo render y vamos a tener

ItemListContainer (seria como mi carrousel de productos) -> ItemList -> Item (la card del producto) 

Y al entrar al detalle se debe poder clickear y mostrar el producto.

-> Lovemos con el ejemplo del slider de productos de Mercado Pago.

-> Vemos que al ver la pagina del producto vemos que la URL cambio

- Para tener esto dinámico hay que hacer un enrutamiento de una forma que lo capture el ItemList Container.

- React Router DOM versión 6:

1. En **index.js** tenemos importado **BRowserRouter** de **react-router-dom** y englobando al componente App tenemos el componente **BRowserRouter**

2. En **App.js** importamos **Routes** y **Route** de **react-router-dom** y vamos a tener **Route** como etiqueta central que va a englobar toods los enrutamientos y adentro va a tener varios **Route** (cada Route es un enrutameinto a una URL).  Cada Route debe tener un **path** (que URL busca) y **element**(que componente muestra)

3. Que solamente el pedido a la API esté enrutado, la parte de arriba del NavBar no.

---

- Queremos que nuestra NavBar tenga categorías que sean clickeables.

```JSX
const NavBar = () => {
  return (
    <div className="navbarContainer">
      <Link to="/">
        <h1>Tuki E-commerce</h1>
      </Link>
      <Link to="/category/jewelery">
        <h1>Jewelery</h1>
      </Link>
      <Link to="/category/electronics">
        <h1>Electronics</h1>
      </Link>
      {/* Acá incorporamos a CartWidget en nuestro render */}
      <CartWidget />
    </div>
  );
};
```

-> Se puede traer la categoria y mostrarla

-> En el **ItemList** agrego otra propiedad que sea category:
```JSX
category={product.category}
```


-> Y en **item** puedo agregar:

```JSX
<h5>{category}</h5>
```

Y en el link:

```JSX
 <Link to={`/item/${id}`}>
```

-> Creo el **ItemListContainer**:
```JSX
// Vamos a tener que pedir un solo producto
// Pedimos la info de los productos a la API y la filtramos por ID
// Le envía la info por props a ItemDetail

const ItemDetailContainer = () => {
  return <h1>Soy el ItemDetailContainer</h1>;
};

export default ItemDetailContainer;
```

-> Y el **ItemDetail**:
```JSX
// Vamos a tener que renderizar ese único producto
// Recibe la info por props
// El contador viene acá
const ItemDetail = () => {
  return <h1>Soy el ItemDetail</h1>;
};

export default ItemDetail;
```

-> La ruta que deberíamso tener es: **localhost:3000/category/nombre-de-categoria** asi me fitra de acuerdo a la categoria, el category es harcodeado, pero el nombre-de-categoria es la que me va a estar filtrando acorde a la categoria elegida. Por ejemplo: localhost:3000/category/celulares/


-> Tengo que agregar ese enrutado en **App.js** agrego el path. Como le paso la prop **category** uso en al URL **:category** y luego para seleccionar la categoría le paso por parámetro **:id**:

```JSX
<Route
  path="/category/:category/:id"
  element={<ItemListContainer nameEcommerce="Tuki Store" />}
/>
```

-> Me va quedando así:

```JSX
return (
  <div className="App">
    <NavBar />
    <Routes>
      <Route
        path="/"
        element={<ItemListContainer nameEcommerce="Tuki Store" />}
      />
      <Route
        path="/category/:category/:id"
        element={<ItemListContainer nameEcommerce="Tuki Store" />}
      />
      <Route
        path="/about"
        element={<h1>Work In Progress: About</h1>}
      />
      <Route
        path="*"
        element={<ItemListContainer nameEcommerce="Tuki Store" />}
      />
      <Route
        path="/item/:id"
        element={<h1>Work In Progress: Item</h1>}
      />
      <Route path="/form" element={<Form />} />
    </Routes>
    {/* Tags de Autocierre */}
  </div>
);
```

-> Y en la **NavBar** le cambio y uso dos categorias que ya tengo en mi pedido dle API:
```JSX
<Link to="/category/jewelery">
  <h1>Jewelery</h1>
</Link>
<Link to="/category/electronics">
  <h1>Electronics</h1>
</Link>
```

-> Tengo que capturar esa categoría que me viene, las categorías deben ser clickeables para que me lleven hacia algún lado, por eso las uso con **Link**.

-> Y tambien linkeo el nombre de mi e-commerce para que al hacer click este en el home:
```JSX
<Link to="/">
  <h1>Tuki E-commerce</h1>
</Link>
```

-> Y en **ItemList** ademas de products, voy a tener index como param en el map para que lo tenga como key:


```JSX
{products.map((product, index) => {
  return (
    <Item
      key={index}
      id={product.id}
      title={product.title}
      price={product.price}
      category={product.category}
    />
  );
})}
```

-> **localhost:3000/** muestra todos los productos.

-> **localhost:3000/category/:category** debe filtrar los resultados y filtrar para mostrar solamente la categoria que se pide.

¿ Cómo lo logramos ?

Con React-Router-DOm y **useParams** en **ItemListContainer** :

```JSX
import { Link, useParams } from "react-router-dom";
```

```JSX
const { category } = useParams();
```

Hago el pedido con **Axios** y si existe la categoria, entonces la seteo, mapeandola con el filter y voy viendo por la categoria.

Obtenemos una categoria, y la tenemos que estar escuchando, para ello en el useEffect le agrgo en el array category.

Entonces al tener ese listener, cada vez que cambio de categoria me hace el re-render. 

```JSX
const getProductsAxios = async () => {
  const getAxios = await axios.get("https://fakestoreapi.com/products/");
  console.log("getAxios", getAxios);
  if (category) {
    setProducts(
      getAxios.data.filter((product) => product.category === category)
    );
  } else {
    setProducts(getAxios.data);
  }
};
```

```JSX
useEffect(() => {
  getProductsAxios();
}, 
```



-> En la NavBar le digo que todas als categorias son clickleables, con la etiqueta **Link**

-> Para que me lleve a algún lado lo manejo en el enrutador, con los **path** y los **element**, lo hago dinamico con los dos **:** de category (de la documentación de React-Router_DOM sacamos que los : indican que son dinamicos), lo que si debe ser una **key** por eso usamos **category** que esta en el JSON de la API.

-> En ItemListContainer invoco a **useParam** que es un hook que me permite calcular los datos dinámicos de los param que llegan en la URL.

-> Vamos a necesitar estar escuchando el cambio de categoria para renderizar , por eso pasamos category en el useEffect. Lo guardo en la constante category para usarla en el use Effect.

```JSX
const getProductsAxios = async () => {
  const getAxios = await axios.get("https://fakestoreapi.com/products/");
  //console.log("getAxios", getAxios);
  if (category) {
    setProducts(
      getAxios.data.filter((product) => product.category === category)
    );
  } else {
    setProducts(getAxios.data);
  }
};
```

Si existe la categoria que me setee los productos, o sea que si la categoria no existe no me trae nada. Por eso ene l array de dependencias le paso category, sino no me va a re renderizar la categoria al existir. Ya que es el useEffect el que va a invocar a getProductsAxios.

Ahora con **setProducts(getAxios.data);** lo que digo es que si no encuentra la categoria igual me muestre los productos

En la URL del home se va a mostrar todos, porque no hay una categoria seleccionada, ahora si me voy a electronics, me va a filtrar por la categoria electronic y veo solo esos.

-> **useParams** es un bjeto que te trae un solo objeto que tiene una **key** que es la **categoria** y el value. En cambio si en la URL tendria más parametros, como por ejemplo la categoría y el id, entonces ahi si voy a tener los id de los productos.

Entonces:

```JSX
<Route
  path="/category/:category/:id"
  element={<ItemListContainer nameEcommerce="Tuki Store" />}
/>
```

-> Ahora hay que recuperar ese id dinámico 

-> Si el proyecto es muy grnde y tiene muchas rutas, loq ue se puede hacer, para no tneer todo en la App, es pasarlo aparte y tener todo el enrutamiento junto. Pero ... no se sule hacer mucho, porque el proyecto esta componetizado.
Pero, no es necesario, porque es como una URL encadenada, un componente llama al otro, como para ir filtrando la ruta de la URL.

-> Otro modo, que aca no lo estamos utilizando, es por **queryParams** y sería asi:

```JSX
let url;
url = `www.google.com.ar/MLA-${id}`; 
```

De este modo iria harcodeando la categoria MLA y le paso dinamicamente el id.

Y para asegurarme que pase bien ese id, voy a tener que utilizar luego los metodos de JavaScript como **.trim()** y **.toLowerCase()**

### Tarea

- Debemos hacer que al filtrar la categoria y todo podamos ver al producto.

- En el **ItemList Container**: vamos a tener que pedir un solo producto. Pedimos la info de los productos a la API y la filtramos por ID. Le envía la info por props a ItemDetail

- En el **ItemDetail** hay que renderizar ese único producto. Recibe la info por props. El contador viene acá

---
---

# :star: Clase 27 * 05/09

## :star: README

En el README usamos **MarkDown** como lenguaje.

- **Dillinger**: editor online [https://dillinger.io/](https://dillinger.io/)


- [**Documentación de GitHub**](https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

- Los encabezados ahora se hacen con # (hasgtag, gatito), el h1 es con uno solo, el h2 es con dos, y asi hasta tener el h6. PAra los títulos de las secciones.

- Lo que no tenga etiquetas es un parrafo.

- Las imagenes son inline. Se muestran con un **!** y **[]** a continuación, sin espacios, dentro dentra el alt de la imagen, y a continuación entre **()** el link a la imagen.

- Los las tres comillas invertidas puedo poner codigo dentro, usarlo por ejemplo para dejar los pasos de clonar el repo, ir a la carpeta y levantarlo. Y si luego de las tres comillas invertidas si es en algun lenguaje en particular hay que indicar el lenguaje entonces nos marca con las particularidades del mismo.

---


## :star: FORMULARIOS : React Hook Form

- Web: [https://react-hook-form.com/](https://react-hook-form.com/)


- Por el momenot tenemos version: 5, 6 y 7.

- Es sencilla de usar.

- Trae un hook para desestructurar (**useForm**** y algunos métodos como: **register**,  **handleSubmit**, **watch** y el objeto para manejar errores **formState: { errors } }**.

---

- Pero ahora en la clase lo vamos a hacer con JavaSCript.

- ¿Como manejamos los input?

- Creamos el componente **Form**:


```JSX
import { useState } from "react";

const Form = () => {
  const [search, setSearch] = useState("");
  const [username, setUsername] = useState("");
  console.log("Soy estado de Search: ", search);
  console.log("Soy estado de Username: ", username);

  username === "fabi" && setUsername("tukidev");

  return (
    <form
    // onSubmit={(ev) => {
    //     ev.preventDefault(), console.log(ev.target.search.value);
    // }}
    >
      <input
        type="text"
        autoComplete="off"
        name="search"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>Resultados de la búsqueda: {search}</p>
      <input
        type="text"
        name="username"
        placeholder="Insert here your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <button type="submit">Buscar</button>
      <p>Resultados del username: {username}</p>
    </form>
  );
};

export default Form;
```

Y en **App.js** lo enrutamos:

```JSX
<Route path="/form" element={<Form />} />
```

Para usarlo antes lo importamos:
```JSX
import Form from "./components/Form";
```

- Entonces ahora en **localhost:3000/form** voy a ver el formulario.

1. Al hacer click en BUSCAr se me re renderiza, esto lo tengo que evitar.

```JSX
onSubmit={(ev) => {
  ev.preventDefault(), console.log(ev.target.search.value);
} 
```

Identifica que al hacer click en BUSCAR se llama a el evento viene del input y con el .value tomo el valor.

2. Pero... se ejecuta uan sola vez, no se actualiza, por ahora es in **INPUT NO CONTROLADO**, se ejecuta cada vez que se hace click. REcien se me dispara al hacer click en el buscar.

3. Quiero guardar lo del evento, y usar un estado para renderizarlo, asi muestro los resultados de la busqueda.

Entonces agrego un search:
```JSX
const [search, setSearch] = useState("");
```

Y voy a setearlo en:
```JSX
onChange={(e) => setSearch(e.target.value)}
```

4. Tengo que manejar el formulario en tiempo real. Actualizo el value que sea dinamico:
```JSX
onChange={(e) => setSearch(e.target.value)}
```

5. Y lo uso para setear el estado:
```JSX
onChange={(e) => setSearch(e.target.value)}
```

-> **Ya tenemos controlado el SEARCH a travel del onChange**

-> Pero ... no estamos pudiendo modificarle el valor.

-> **Por eso en el value dejo el search dinamico como un valor de una variable**.

-> Ahora si el value y el estado se actualizan al mismo tiempo. No voy a necesitar el evento onSubmit. Voy a tener controlado el estado del componente con el value del input.

6. Aplico la misma logica para un input al que hay que ingresarle el nombre del usuario:

```JSX
const [username, setUsername] = useState("");
```

```JSX
<input
  type="text"
  name="username"
  placeholder="Insert here your username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
></input>
```

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

- un determinado componente tiene la capacidad de despachar(**dispatch**) una accion , llama a un reducer, actualiza el sado principal y modificar el store.

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
