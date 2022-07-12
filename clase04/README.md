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

- [https://www.grabient.com/](https://www.grabient.com/)

- [http://khroma.co/](http://khroma.co/)

- [https://pigment.shapefactory.co/](https://pigment.shapefactory.co/)

- [https://color.adobe.com/es/create](https://color.adobe.com/es/create)

---

[Disney y la psicologia del color](https://mott.pe/noticias/lo-que-los-villanos-de-disney-revelan-sobre-la-psicologia-del-color/)

---


Aca se pueden ver las practicas de la clase, en la carpeta...

... [practica_clase4](https://github.com/eugenia1984/Avalith-React/tree/main/clase04/practica_clase4).


... [practica2_clase4](https://github.com/eugenia1984/Avalith-React/tree/main/clase04/practica2_clase4).

Utilizando solamente Flexbox y sin ninguna librería externa, maquetar el [**diagrama**](https://github.com/eugenia1984/Avalith-React/blob/main/clase04/maquetado.pdf).

Cada texto debe estar posicionado donde se muestra en la imagen. La fuente puede ser de color blanca y un tamaño aprox. de 25px.

Cada cuadro debe tener el color hexadecimal que se menciona en cada caja. 

[aca se puede ver](https://eugenia1984.github.io/Avalith-React/tree/main/clase04/practica2_clase4/index.html)

... tercer practica:

En grupos formados de manera aleatoria a través de Breakout Rooms Zoom, maquetar un equivalente de los diferentes sitios compartidos. 

No debe contener nada de funcionalidades ni transiciones. 

Los menúes solo deben estar presentados y posicionados, no deben contener los desplegables

Continuar esta tarea con los participantes que compartan la sala para presentar el día miércoles 13/07 al comienzo del encuentro sincrónico

Una excelente idea para practicar maquetado es replicar sitios webs, de menor a mayor dificultad. En este caso, te comparto los seis sitios elegidos para la práctica en Salas de Zoom

-  GRUPO 1 : [https://monograph.com/](https://monograph.com/)

-  GRUPO 2 : [https://www.coca-cola.com.ar/](https://www.coca-cola.com.ar/)

-  GRUPO 3 : [https://annearte.mitiendanube.com/productos/](https://annearte.mitiendanube.com/productos/)

-  GRUPO 4 : [https://balcon.com.ar/](https://balcon.com.ar/)

-  GRUPO 5 : [https://www.etq-amsterdam.com/](https://www.etq-amsterdam.com/)

-  GRUPO 6 : [https://www.esenzzia.com/](https://www.esenzzia.com/)


---

### :star: Git Esencial

### Git vs GitHub (y otras alternativas)

### Comandos básicos (y super necesarios)


---
