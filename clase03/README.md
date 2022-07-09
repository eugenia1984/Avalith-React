# Clase 03 * Viernes 08 de Julio

---


# :star: 2 - Preparación del entorno

- Instalación de programas necesarios

- Revision de versiones

- Configuración del editor y extensiones

---


### NODE.JS Y NPM (NODE PACKEGE MANAGER)

Cuando usamos Node.js, rápidamente tenemos que instalar módulos nuevos (librerías), ya que al ser un sistema fuertemente modular viene prácticamente “vacío”. 

Por lo tanto, para utilizar una funcionalidad de alguna librería publicada, deberemos instalar módulos adicionales. 

Esta operación se realiza de forma muy sencilla con la herramienta npm 
(Node Package Manager).


Esta herramienta funciona de dos formas:

- Como un repositorio ampliamente utilizado para la publicación de proyectos Node.js de código abierto.


- Como una herramienta de línea de comandos. Esta utilidad ayuda a instalar y desinstalar paquetes, gestionar versiones y gestionar dependencias necesarias para ejecutar un proyecto.



-->> Otra alternativa es YARN


## Instalación de Node.js

Verificá si ya tenés una versión instalada -> Antes de iniciar el proceso de instalación, verificá si tenés alguna versión de Node.js instalada en tu equipo:

``` node -v```

**16.16.0** es la version LTS actual. Si tenemos entre 14 a 16 para React igualmente estamos bien.


#### Pasos:

Para poder instalar una aplicación de React JS desde el CLI, debemos previamente instalar Nodejs

- **1** - ingresar a https://nodejs.org

- **2** - descargar la última versión de Node.js

- **3** - ejecutar el archivo descargado y ejecutar los siguientes pasos: aceptar / tildar todas las opciones (es importante tener seleccionado el add to path) / next / next / install

---

## GIT  Control de versiones

- Para ver si ya lo tengo instalado: ```git --version```, con que sea superior a la 2 estamos bien.

- Para descargarlo de [https://git-scm.com](https://git-scm.com), haciendo click en download , hacer NEXT y dejar todo con click asi tenemos git bash, que vea si hay actualizaciones de git, etc, etc.


--

## VSC Visual Studio Code

- Intuitivo

- Tiene gran variedad de extensiones

- Hecho en JavaScript

- Apoyado por la comunidad

- Altamente personalizable

### Extensiones

- Error Lens

- ES7 - React - REdux - REact-Native  snippets

- GITLens

- Live Server

- Material Icon Theme

- Mookai Pro (tema de pago, hay otros)

- Prettier - Code formatter

- snapcode (para poder tomar capturas de codigo) 

---
---

# :star: 3 -  Maquetado

##  Las tres tecnologías: HTML, CSS y JS:

### 1 -> HTML (HYPERTEXT MARKUP LANGUAJE)

- Todas las webs lo utilizan

- Sintaxis de etiquetas, en general todas tiene su etiqueta de apertura y de cierre, salvo algunas excepciones como : ```br``` y ```img```.

- Estructura de datos (etiuetas semánticas)

- Lenguaje Estándar Universal

- Accesibilidad

- SEO

-->> Documentacion en [https://www.w3schools.com](https://www.w3schools.com)

-->> También está Developer Mozilla y FreeCodeCamp


#### Elementos basicos HTML

HTML define una serie de elementos o etiquetas que servirán para delimitar el texto

```html
<section class="commentas-sections">
  <p>Soy un parrafo</p>
</section>
```

### Buenas practicas

-->> ```!``` o  ```htl:5``` son los shortcut en VSC para armar la estructura basica

-->> **.html** es mla extensión del archivo

Etiquetas esenciales:

- ```h1```, ```h2```, ```h3```, ```h4```, ```h5```, ```h6```, los headers, debe haber un solo h1 y tieneen jerarquía.

- ```section``` y las etiquetas semanticas: ```header```, ```footer```, ```nav```, ```aside```

- ```img```

- ```body```

- ```head``` , las ```metatag``` para el SEO y el ```title```

- listas: ```ul```, ```o```, ```li```

- ```p```

- anchor (links): ```a```

---

### 2 -> CSS

#### CSS3 ( CASCADE STYLESHEET )

- Estila componentes

- Animaciones

- Sombras

- Imágenes

- Responsive pages


```CSS
.comments-sections {
  background: lightcoral;
  color: darkgreen;
  text-shadow: 0 0 5px black;
}
```

Siempre entre {} y con key-value

-->> Extension del archivo **.css**

-->> CSS da los estilos la sitio. Y con buenas practicas puedo tener estilos reutilizables.

-->> DRY 'Don't repeat yourself'

-->> Hacerlo mobile first y con responsive design

-->> Extension del archivo **.css**

-->> Librerías: Bootstrap, Tailwindcss, Material-UI, Chakra UI, Bulma.

-->> Linkear CSS a HTML : 
```html
<link href="stylesheet.css" rel="stylesheet" type="text/css">
```

Hay que ver donde tengo mi archivo .css para ver como le doy la ruta **./** si esta a la misma altura (en la carpeta raiz) ó **../** si está en un directorio y debo volver una hacia atrás.

---

## 3 -> JAVASCRIPT

- Dinamismo  a la web

- Lenguaje interpretado

- Abierto y multiplataforma

- Comunicación con servidor

- Debilmente tipado

- Orientado a objetos

- Basado en prototipos

- Imperativo


---

