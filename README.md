# CRUD-API-REST
CRUD de libros y operaciones de los autores con nodejs y mySQL, que permite: crear, editar, consultar, eliminar registros y consultar por valores de las tablas.

## Requisitos Previos
Se debe tener instalado node.js y npm, puedes descargarlos desde [node.js](https://nodejs.org/es/)  y luego verificar las versiones descargadas con los siguientes comandos:
```
$ node --version
$ npm --version
```
## Pasos

### init-package-json
Inicializar el proyecto
```
npm init -y
```

### Instalar las dependencias
```
npm i express body-parser morgan mysql
```
* mySQL: Interactuar con la base de datos SQL
* express: poder entender y/o escribir en el servidor node.js
* body-parser: Entender las peticiones POST
* morgan: Middleware de registro de solicitudes HTTP para node.js, ver las peticiones que llegan al servidor

##### nodemon
Automatiza el proceso del servidor y no reiniciarlo manualmente (opcional)
```
npm i nodemon --save-dev
```
### Comandos SQL
Para iniciar MySQL
```
mysql -u root -p
```


