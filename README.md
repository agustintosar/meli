# Challenge para el area de front end en Mercado Libre

https://github.com/agustintosar/meli

## Instalación

Para correr el proyecto debes descargar el .zip desde github o clonarlo ejecutando los siguientes comandos:

```sh
git clone https://github.com/agustintosar/meli.git
cd meli
```

## Correr el Backend

Para correr el backend debes ir al directorio backend, instalar las dependencias correspondientes e iniciar el servidor ejecutando los siguientes comandos:

```sh
cd backend
npm install
npm start
```

## Correr el Frontend

Para correr el frontend debes ir al directorio frontend, instalar las dependencias correspondientes e iniciar el cliente ejecutando los siguientes comandos:

```sh
cd frontend
npm install
npm start
```

Consideraciones

- En los endpoints /api/items y /api/items/:id solicitados no se agregó la información author.name y author.lastname ya que no se encontraba dicha información en los enpoints consultados a la api de Mercado Libre
- En el endpoint /api/items no se agregó la información price.decimals ya que no se enconró dicha información en los enpoints consultados a la api de Mercado Libre
- No se encontraba disponible la información de las categories para los detalles de un item por id

Cualquier bug o consulta puedes consultarme al siguiente correo: tosar.agustin@gmail.com
