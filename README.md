## Description
Verifarma-prueba-app 
Es una app que consta de un frontend hecho en Vuejs 3

## Installation Guide
1. Clone este repositorio en su máquina local:

   ```bash
   git clone https://github.com/tu_usuario/vue-movie-app.git

2. npm install

3. npm install -g @vue/cli

4. npm run serve

5. Enter http://localhost:8080



### Requirements
1. Docker (docker desktop recomended)

2. Docker-compose


## Installation Guide with Docker

1. Run Docker containers
    ```
    docker-compose up -d
    ```
2. Enter http://localhost:8080



## Logic of use

1. Inicio de sesión: Cuando acceda a http://localhost:8080/, se le redirigirá a la página de inicio de sesión. Ingrese su nombre de usuario y contraseña y haga clic en "Iniciar sesión" para acceder a la página de películas.

2. Ver detalles de la película: En la página de películas (http://localhost:8080/movies), verá detalles de una película, incluida su imagen. Haga clic en la imagen para ver más detalles sobre la película.

3. Editar película: En la página de detalles de la película, verá un botón "Editar". Haga clic en este botón para abrir un modal con campos para editar la información de la película.

4. Actualizar película: Después de realizar los cambios en los campos de edición, haga clic en "Actualizar" en el modal para guardar los cambios. El modal se cerrará automáticamente y los cambios se reflejarán en la página de detalles de la película.