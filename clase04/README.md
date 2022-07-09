# Clase 04 * Lunes 11 de Julio

---

## Flexbox

#### Para ver donde funciona

Se puede chequear en [Can I use](https://caniuse.com/?search=flexbox)


```
                     ^CRoss axis
 flex container      |            Main size
  -----------------------------------------
  |                                       |  Cross size
  |                                       |
  |      ----------        -----------    |
  |      | flex   |        |  flex    |   |
  |      | item   |        |  item    |   |--->Main axis
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

- ```flex-direction``` : column (en columnas), row (en filas)

- ```flex-shrink```

- ```flex-wrap``` : nowrap, wrap(si hay más que el larga de la fila o columna se van a ir acomodando en la que sige), wrap-reverse (si hay más que el larga de la fila o columna se van a ir acomodando en la que sige en sentido inverso, empiezan de abajo hacia arriba -de atras hacia adelante-)

- ```justify-content``` positions a container's items along the main axis and accepts the following values:

-**flex-start**: group items at the start of a container's main axis

-**flex-end**: group items at the end of the main axis

-**center**: group items in the center of the main axis

-**space-between**: evenly distribute items along the main axis such that the first item aligns at the start and the final item aligns at the end

-**space-around**: evenly distribute items along the main axis such that all items have equal space around them

- ```align-items```

- ```align-content```

Y en casa comando hay varias opciones para diferentes resultados.

---
