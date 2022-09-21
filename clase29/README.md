
# :star: Clase 29 * 09/09 

## LIBRERIAS

- Librería [**https://mui.com/**](https://mui.com/), es más compleja para utilizar, es mejor primero usar Bootstrap, Tailwind y recien después que sabemos usar los hooks se puede usar esta libreria. Pasa los colores como props, por ejemplo. Tiene un slider que esta bueno. Tiene por ejemplo el [skeleton](https://mui.com/material-ui/react-skeleton/) para cuando esta precargando

- Librería para animaciones [**Loading IO**](https://loading.io/) - https://loading.io/, es para fondos, gif, isv, css, y mucho mas.

- [**React Spinners**](https://www.npmjs.com/package/react-spinners) se puede ver en esta [demo](https://www.davidhu.io/react-spinners/)


---

## FORMULARIO

Podemos pasar la logica dle prevent default a una constante que tenga la función:

```JSX
const handleSubmit = (ev) => {
  ev.preventDefault();
  console.log(ev.target.search.value);
}

return (
  <form
    onSubmit={handleSubmit}
  >
  </form>
```

De este modo el codigo queda mucho más limpio, el return queda lo más chico posible y la lógica la tenemos antes.


---

## Styles Components

- [**Styled Components**](https://styled-components.com/)

Es un system design, cuando te armas tu propia librería, como Facebook que tiene su propia.

Pones los estilos en un archivo .js y lo usas en el proyecto.


---

## Three.js


[**ThreeJS**](https://threejs.org/) es una librería, peor para hacer cosas en 3D.


---

### RENDERIZADO CONDICIONAL (Loading)

Si de las librerias vistas hacemos un componene de un loader, y lo importamos en ItemListContainer, podemos agregar una logica con un ternario y si no tnego ningun producto para mostrar voy a ver el loading, sino veo los productos.

```JSX
{products.length === 0 ? (
  <h1>Loading ... </h1>
) : (
  <ItemList products={products} />
)}
```

- Para la parte de animaciones si se utiliza el setTimeOut, pero no en un loader, porque te va a hacer que baje la performance de la app.


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


https://www.youtube.com/watch?v=ERSqgsA6huY&list=PLJPvCr6dK-cmOZSKyBMiQwptaQb30wqHl&index=24


---
---

# :star: Clase 30 * 12/09


---
---


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
