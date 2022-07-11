# Clase 04 * Lunes 11 de Julio

---

## :star:  Flexbox

#### Para ver donde funciona

Se puede chequear en [Can I use](https://caniuse.com/?search=flexbox)


-->> Flexbox nos permite posicionar los elementos

### La estructura

``` 
                     ^ Cross axis
                     |
 flex container      |            Main size
  -----------------------------------------
  |                                       |  Cross size
  |                                       |
  |      ----------        -----------    |
  |      | flex   |        |  flex    |   |
  |      | item   |        |  item    |   | ----- >Main axis
  |      ----------        ------------   |
  |                                       |
  |---------------------------------------|

```
### ¿ Cómo lo aplico ?

El más importante es:

```CSS
.element {
  display: flex;
}
```

Otros son:


- ```flex-direction``` : 

-**column** (en columnas) y **column-reverse**

-**row** (en filas) y **row reverse**


- ```flex-shrink```

-**stretch** van a ocupar todo el alto del contenedor

-**flex-start** van a estar comenzando desde el borde de arriba

-**center**

-**flex-end**: van a estar pegados al borde de abajo

- ```flex-wrap``` : 

-**nowrap**

--**wrap**, si hay más que el larga de la fila o columna se van a ir acomodando en la que sige

-**wrap-reverse** si hay más que el larga de la fila o columna se van a ir acomodando en la que sige en sentido inverso, empiezan de abajo hacia arriba -de atras hacia adelante

- ```justify-content``` a cual alinea elementos horizontalmente (**sobre el main axis**) si están en filas y acepta los siguientes valores:

-**flex-start**: Alinea elementos al lado izquierdo del contenedor.

-**flex-end**: mlinea elementos al lado derecho del contenedor.

-**center**: mlinea elementos en el centro del contenedor.

-**space-between**: muestra elementos con la misma distancia entre ellos.

-**space-around**: muestra elementos con la misma separación alrededor de ellos, pero no en el primero y ultimo y los bordes.

-**space-evenly**: muestra elementos con la misma separación entre ellos, inclusive en el primero y ultimo y los bordes

---


### Recursos para armar paletas de colores

Combinaciones armónicas de colores.

Sirven para expresar alguna idea

Se utilizan como instrumento para la entidad visual del producto

Páginas que nos ayudan:

- [https://color.adobe.com/es/create](https://color.adobe.com/es/create)

- [https://colorhunt.co/](https://colorhunt.co/)

---

Aca se puede ver la practica de la clase, en la carpeta: [practica_clase4]()

---

### :star: Git Esencial

### Git vs GitHub (y otras alternativas)

### Comandos básicos (y super necesarios)


---
