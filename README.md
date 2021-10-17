# Prueba Tecnica AdMan

## Propuesta

Utilizando la API de Spotify, se deben listar todos los álbumes (con sus respectivas imágenes)
de un artista en particular ordenados descendentemente por popularidad.

El nombre del artista debe ser proporcionado por el usuario desde el frontend. En caso de que
exista más de un artista con ese nombre se debe seleccionar el primer artista de la lista.

Por cada solicitud, el backend debe almacenar en la DB la IP del usuario, la fecha de la
solicitud y el nombre del artista.

El frontend no debe comunicarse directamente con la API de Spotify. Debe comunicarse con
el backend y desde este es que se debe realizar la request a la API de Spotify.

## Tecnlologías

### Frontend

- React (utilizando hooks, functional components).

### Backend

- Node / Express utilizando TypeScript (preferentemente) o JavaScript
- Para manejar la DB se recomienda alguna librería como TypeORM o Sequelize
  Storage
- Cualquier DB de tipo relacional como por ejemplo MySQL
  Notas
- Se valorará el buen uso de git (commits, branches, etc.)
- Se pueden utilizar librerías extra, tanto de frontend como de backend

## Cómo correr el proyecto en mi máquina?

### Requisitos:

- Node.js
- NPM
- Docker y Docker-Compose (opcional)

### Paso a paso:

Clonar el repo:

```bash
git clone https://github.com/diegocamy/prueba-tecnica.git
```

Instalar los repositorios tanto de frontend como de backend:

```bash
cd prueba-tecnica
cd backend
npm i
cd ..
cd frontend
npm i
```

Registrarse en la [API de Spotify](https://developer.spotify.com/dashboard/login) y crear una app. Así obtendremos un client ID y un client secret, importantes para poder comunicarnos con la API de spotify.

Crear un archivo .env en la ruta `prueba-tecnica/backend` y configurar lo siguiente:

```
PORT=4000
SPOTIFY_CLIENT_ID=tu_client_id
SPOTIFY_CLIENT_SECRET=tu_client_secret
DB_PASSWORD=spotify
DB_USER=spotify
DB_NAME=spotify
DB_PORT=5432
DB_HOST=localhost
```

Obs: se pueden cambiar los valores de conexión de la base de datos, siempre y cuando se reflejen los **mismos** cambios en el archivo `docker-compose.yml` que se encuentra en `prueba-tecnica/backend`

**En caso de NO usar docker-compose, cambiar los valores de DB_PASSWORD,DB_USER,DB_NAME,DB_PORT,DB_HOST del archivo .env a los que desee según la configuración de PostgreSQL de su máquina**

Ejecutar los siguientes scripts en 3 terminales distintas:

1. Pararse en `prueba-tecnica/frontend`

```bash
npm start
```

2. Pararse en `prueba-tecnica/backend` (solamente si se utiliza docker)

```bash
docker-compose up
```

3. Pararse en `prueba-tecnica/backend`

```bash
npm run dev
```

Si no se modificaron las configuraciones, nuestro frontend correrá en `localhost:3000` y será visible desde cualquier navegador local (se recomienda usar chrome) y nuestro backend correrá en `localhost:4000`

Si se utiliza docker-compose y no se modificaron los ajustes del archivo `docker-compose.yml` tendremos acceso al gestor de bases de datos "adminer" en `localhost:8080` (se ingresa desde cualquier navegador)
