# :star: Workshop * GIT 
---

### Temas

- Instalación

---

## Instalación

1. **Verifica si ya tenes una versión instalada**:  Antes de iniciar el proceso de instalación verificá si tenés alguna versión de git ya descargada e instalada, con el comando: ```git --version```. Si lo tenemos insalado nos va a decir la versión que tenemos. Sino vamos a [https://git-scm.com/](https://git-scm.com/) para poder instalarlo. Y volvemos a poner ```git --version``` por lo que nos va a dar la version.

2. **Comandos esenciales**: son:

```git init``` para iniciar un nuevo repositorio en local

```git status``` sirve para coontrolar el estado de nuestro repositorio

```git add .``` sirve para enviar los cambios desde el repositorio local al repositorio remoto, si quiero agregar un determinado archivo: ```git add [nombre_del_archivo]```

```git commit -m "mensaje"``` sirve para escribir un mensaje en el cambio que queremos versionar.

```git push``` sirve para enviar los cambios desde el repositorio local al repositorio remoto.

```git remote update origin --prune``` sirve para traer todas las ramas remotas hacia el repositorio local

```git checkout <branch>``` sirve para movernos de una rama a otra

```git checkout -b <nombre_de_la_nueva_rama>``` sirve para crear una nueva rama

```git branch``` sirve para ver las ramas disponibles en el repositorio

```git remote -v``` sirve para ver la direccion del repositorio remoto vinculado

```git remote add origin <url>``` sirve para vincular el repositorio local a un repositorio remoto

```git clone <url>``` sirve para clonar un repositorio remoto a nuestro equipo


---

### Configuraciones


```git config --global user.name "[el_nombre]" ```

```git config --global user.email "[el_email]" ```

Para ver las variables configurables:

```git config -- get [key_name]``` por ejemplo ```git congif --get user.name```


---
