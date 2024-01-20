// Importar la variable app
import app from './server.js'

// Importar la funcion connection()
import connection from './database.js'

//Hacer uso de la funcion conection()
connection()

// Iniciar el servidor en el puerto 3000
app.listen(app.get('port'),()=>{
    console.log(`Server ok on http://localhost:${app.get('port')}`);
})
