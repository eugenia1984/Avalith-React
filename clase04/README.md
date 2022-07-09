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

- ```justify-content```

- ```align-items```

- ```align-content```

Y en casa comando hay varias opciones para diferentes resultados.

---
