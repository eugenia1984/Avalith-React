# Clase 04 * Lunes 11 de Julio

---

## Flexbox

#### Para ver donde funciona

Se puede chequear en [Can I use](https://caniuse.com/?search=flexbox)



```                  ^ Cross axis
                     |
 flex container      |            Main size
  -----------------------------------------
  |                                       |  Cross size
  |                                       |
  |      ----------        -----------    |
  |      | flex   |        |  flex    |   |
  |      | item   |        |  item    |   |--- >Main axis
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

-**column** (en columnas)

-**row** (en filas)

- ```flex-shrink```

- ```flex-wrap``` : nowrap, wrap(si hay más que el larga de la fila o columna se van a ir acomodando en la que sige), wrap-reverse (si hay más que el larga de la fila o columna se van a ir acomodando en la que sige en sentido inverso, empiezan de abajo hacia arriba -de atras hacia adelante-)

- ```justify-content``` a cual alinea elementos horizontalmente (**sobre el main axis**) si están en filas y acepta los siguientes valores:

-**flex-start**: Alinea elementos al lado izquierdo del contenedor.

-**flex-end**: Alinea elementos al lado derecho del contenedor.

-**center**: Alinea elementos en el centro del contenedor.

-**space-between**: Muestra elementos con la misma distancia entre ellos.

-**space-around**: Muestra elementos con la misma separación alrededor de ellos.

Y en casa comando hay varias opciones para diferentes resultados.

---
