# Clase 6 * Viernes 15 de Julio

---

- Revimos los ejercicios grupales de cada uno y los presentamos, recreando una daily.

---

- Hablamos un poco de la metodología **scrum**, como se separa en **sprint**, y se asignan tareas por desarrolladores. Se trata hacer el **MVP** (producto minimo viable). Cada tarea debe estar estimada

- Se va separando en **git** en **branches**

---

## Comandos esenciales

```git init``` -> sirve para iniciar un nuevo repositorio en local
 
```git status``` -> sirve para controlar el estado de nuestro repositorio local

```git add ``` ->  sirve para agregar cambios a nuestro **staging**. Si quiero agregar todo ```git add .``` el **.** seria el **all**, para agregar todos los cambios, si quiero agregar un solo documento ```git add <nombre>```.

```git commit -m "mensaje"``` -> sirve para escribir un mensaje en el cambio que queremos versionar. Depende lo que haga utilizo algun verbo, por ejemplo **fix**. Como buena práctica utilizar inglés, que el mensaje sea corto y conciso.

```git push ``` -> sirve para enviar los cambios desde eun repositorio **local** o **remoto**

```git remote update origin --prune ``` -> sirve para traer todas las **ramas remotas** a mi **repositorio local**.

```git checkout <branch>``` -> sirve para movernos de una rama a otra

```git branch``` -> para ver las ramas en mi repositorio

```git branch nombre-rama``` -> para crear una rama

```git remote -v ``` -> sirve para ver la direccion del repositorio remoto vinculado.

```git remote add origin [url]``` -> sirve para vincular el repositorio local a un repositorio remoto

```git clone [url]``` -> sirve para clonar un repositorio remoto a nuestro equipo.

**GitHub** me permite alojar mis repositorios locales.


### Es necesario configurar las credenciales de forma inicial para que git pueda hacer login

```git cofig --global user.name "mi nombre"``` -> para configurar el nombre

```git cofig --global user.email "example@example.com"``` -> para configurar el email

Para ver las variables configuradas:

```git config --get [key_name]``` -> para ver las configuraciones, por ejemplo:

**git config --get user.name** para ver mi nombre

**git config --get user.email** para ver mi e-mail

---

## Secuencias sugeridas

```git init``` -> creo el repositorio 

Voy a GitHub / GitLab y me creo un repositorio remoto

```git remote add origin [url]``` agrego la URL del repositorio remoto

```git remote -v``` veo que se haya creado la referencia remota para mi repositorio local.

```git status``` veo el estado del repositorio y la rama en la que estoy

```git add .``` agrego todos los cambios

```git commit -m " mensaje" ``` creo un commit con un mensaje

```git push origin [branch]``` publico la nueva version de mi repositorio local en el remoto
---

## Buenas pácticas para el commit

[midu](https://midu.dev/buenas-practicas-escribir-commits-git/)

[codigo facilito](https://codigofacilito.com/articulos/buenas-practicas-eb-commits-de-git)

[medium](https://medium.com/@jmz12/buenas-pr%C3%A1cticas-para-commits-5eb4c86b9a47)

Si queres agregar iconos en los commits usando [Mark Up](https://gist.github.com/parmentf/035de27d6e1dce0b36a)


---

## Otros comandos

```git pull origin [branch]``` sirve para traer la informacion desde una determinada rama

```git merge``` sirve para combinar los cambios entre dos ramas. Hacer el **merge** entre dos ramas puede generar **conflictos** que debemos resolver para concretar la fusión.
---

