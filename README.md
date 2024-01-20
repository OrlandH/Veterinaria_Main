# Laboratorio 21-22
Api Veterinaria
## Proyecto Veterinaria y sprints
Realización del Sprint 2 del proyecto.
## Integrantes
* Jared Valenzuela
* Joseph Yépez
* Alejandro Moreira
* Heyer Tinoco
* Juan Falconi
* Juan Gualotuña
* Miguel Paredes
### Creación de la estructura del proyecto
![image](https://github.com/Alejandro-Moreira/api-veterinaria/assets/117743484/f5cd3192-fc61-4f88-98a7-4a7ceec7223e)
### Creación de las configuraciones del proyecto
Uso del Nodemailer para el envio de correos, para la verificación de cuentas mediante el uso de tokens.
![image](https://github.com/Alejandro-Moreira/Veterinaria/assets/117743484/92ed065a-9064-408a-8420-9d9e9c763638)

Uso de un archivo (autenticacion.js), el cual contiene las verificaciones mediante el uso de tokens enviados al correo electrónica que se registre.

![image](https://github.com/Alejandro-Moreira/Veterinaria/assets/117743484/9ed959b4-a5d3-487c-ac47-b3f449e96cb3)
### Creación de los helpers del proyecto
Creación del helper JWT para establecer una conexión con el paciente y el veterinario.
![image](https://github.com/Alejandro-Moreira/Veterinaria/assets/117743484/7dde7587-d9d1-475f-8798-ad3cec9d38f4)
### Creación de los controladores del proyecto
Creación de el controlador paciente con cada uno de los métodos y exportación de los mismos.
![image](https://github.com/Alejandro-Moreira/Veterinaria/assets/117743484/f96a28dd-6295-4799-ae82-77aaf1efa378)
### Creación del modelo del proyecto
Uso de un esquema y métodos para realizar la recuperación tanto de contraseñas, además de la verificación mediante el uso de tokens.

![image](https://github.com/Alejandro-Moreira/Veterinaria/assets/117743484/69cbe6b0-cd83-4f6a-8d63-ea04e3e04e70)
### Creación de las rutas del proyecto
Creamos cada una de las rutas que va a tener nuestro proyecto, importandolas mediante el path de origen.
![image](https://github.com/Alejandro-Moreira/Veterinaria/assets/117743484/f8ccb6c8-8f01-4fce-91d8-a132b4473f0f)
### Database.js
Codificación del archivo database.js (conexión con la base de datos), con sus respectivas excepciones.
![image](https://github.com/Alejandro-Moreira/api-veterinaria/assets/117743484/5c19d0b2-3754-4630-a450-23c804b2b6c5)
### Server.js
Codificación del archivo server.js, el cual contine módulos, inicializaciones, configuraciones, variables globales, rutas y la instancia de Express.
![image](https://github.com/Alejandro-Moreira/api-veterinaria/assets/117743484/6c6d7bf8-057c-4341-afa5-d515662576a1)
### Index.js
Codificación del archivo index.js, el cual contiene la importación del servidor, la conexión con la base de datos y la variable con el puerto en el que se está ejecutando nuestro proyecto (en este caso, puerto 3000).
![image](https://github.com/Alejandro-Moreira/api-veterinaria/assets/117743484/9a696f5c-77d2-4b41-b1d0-86c705ba3f09)
### Ejecución
Ejecución del proyecto en la terminal de Visual Studio Code.
![image](https://github.com/Alejandro-Moreira/api-veterinaria/assets/117743484/0dc01472-0beb-4834-8af8-bd041068d7c8)
