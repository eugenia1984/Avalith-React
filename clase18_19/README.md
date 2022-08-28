## :star: Clase 18 * Viernes 12 Agosto * Introduccion a Ract 

---

### Temas

1. Presentando React

2. Formas de Crear un Proyecto en React

3. Estructura de carpetas

4. Errores en REact

5. ¿Cómo funciona React?

---

# :star: 9. Introducción a React

### 1 - Introducción a React

- Es una librería creada por Facebook para el Front End

- Su primer release fue lanzada en Mayo 2013

- Su propósito principal es facilitar la tarea de crear interfaces de usuarios (**UI**)

- Propone el concepto de "Reactivo a los cambios" (comenzo con clases y ahora tiene componentes funcionales)

- Tiene una comunidad muy grande, hay mucha documentación

---

# :star: 10. Sintaxis y estructura de proyectos en React

### 2. Formas de Crear un Proyecto en React


:star: **Creando un proyecto con CRA (Create React App)**

- **CRA** es el asincronismo correspondiente a **Create React App**.

- Es el comando que la librería trae de forma natural para poder crear un proyecto de React.

- Como sabemos que esto depende de **Node**, entonces es posible utilizar NPM para manejar los paquetes.

- En este caso, utilizaremos uno muy parecido que se llama **NPX** que no es más que un **NPM** pero EXecutable.

- Veamos cómo crear un proyecto entonces:

1. En una consola ubicada en la carpeta de nuestro proyecto, ejecutaremos el comando: ``` npx create-react-app [nombre-de-mi-proyecto]```

2. Esperamos a que aparezca el mensaje "Happy hacking"

3. Entramos a nuestra carpeta y ejecutamos ```npm start```

- Tips que hay que tener en cuanta al dar el nombre al proyecto:

-no se pueden dejar espacios

-debe der tdo en minuscula

- Creado un proyecto con VITE

:star: **Creando un proyecto con Vite**:

1. Para crear un proyecto con **Vite** en lugar de **CRA** es necesario que se ejecute el comando:

```npm init vit@latest [nombre-de-mi-proyecto] ```

2. Para continuar debemos ingresar a la carpeta creada utilizamos:

```cd [nombre-de-mi-proyecto]```

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

### Tarea:

- Buscar la diferencia entre **libreria** y **framework**, ¿que le falta a React para ser considerado un Framework? ¿ Por qué es ventaja que sea una librería?

Un **framework**, al ser un entorno de trabajo, puede contener varias librerías. Mientras una **librería** simplemente es un conjunto de elementos que te resuelve el laburo, por ej functions, classes, etc.

React por sí mismo es una librería y no un framework, puesto que se ocupa de las interfaces de usuario. Sin embargo, diversos añadidos pueden convertir a React en un producto equiparable en características a un framework



- Crear un proyecto y subirlo

- Clonar un repositorio y agregar las dependencias

---
