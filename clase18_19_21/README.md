## :star: Clase 18 y 19  * Viernes 12 Agosto y Miércoles 18 de Agosto * Introduccion a Ract 

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

# :star: Clase 21 * 22 de Agosto

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

3. Ahora al ejecutar ```npm start``` el navegador nos arrojará muchos errores. Vamos a solucionarlos siguiendo la ruta que nos muestra el error. 

Si voy a *http://localhost:3000* no me va a correr sino dar esos errores

React tiene **hot reload** cada vez que hago un cambio se vuelve a compilar

---

## JSX


JavaScript XML permite utilizar HTML y JavaScript juntos. Me permite utilizar lenguaje de marcado dentro de una función en React.

Si el proyecto lo creamos con Vite, para los componentes que tiene HTML incrustado debemos utilizar la extension **.jsx**.

Si por ejemplo hacemos un fetch a una APi utilizamos .js ya que no tenemos nada para renderizar(retornar).

Para tener onsistencia si para algún componente necesito que tenga la extension .jsx entonces TODOS los componentes van a tener la extension .jsx.

---

## Tarea


- Al contador de clics que desarrollamos hoy, agregarle una función llamada **decrease** que reste la cantidad de clics del estado. 

Debe renderizar números negativos inclusive.

Declarar un estado a través de un hook que tenga una variable llamada **info** junto con su setter correspondiente. 

-El **estado inicial** debe ser un objeto con dos keys: **name** y **age**.  

-La **key name** debe tener el nombre de ustedes en diminutivo (o su apodo). 

-El setter debe ejecutarse cliquear un botón llamado **Change Info**, debe recuperar el estado inicial y debe cambiar el nombre en diminutivo (o apodo) por el nombre completo y debe agregar la key lastName con su correspondiente valor. 

Por ejemplo (i.e), en mi caso, el objeto inicial quedaría como: **{ name: "Fabi", age: 28 }** y luego del seteo del estado debe quedar **{ name: "Fabián", age: 28, lastName: Tureo }**. 

-Mostrar el estado del hook por consola.

-Declarar un estado que tenga una variable llamada loading junto con su setter correspondiente. 

-El estado inicial debe ser false y al cliquear un botón llamado Change Loading debe cambiar al contrario del estado. 

-Si inicia en false, debe cambiar a true y si está en true, debe cambiar a false.  

-Mostrar el estado del hook por consola.

- Declarar un estado que tenga una variable llamada **animals** junto con su setter correspondiente. 

El estado inicial debe ser un array con un elemento de tipo string y cuyo valor sea "Raccoon" (Aguanten los Guardianes de la Galaxia :cohete:). 

Al ejecutar el seteo del estado a través de un botón llamado Add Animals, se debe conservar el primer elemento y se debe agregar un array de cinco animales que puede estar guardado en una variable extra o no. 

El resultado final debe mostrarse por consola y debe contener un array de seis elementos

---
