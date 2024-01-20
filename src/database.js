// Importar Mongoose
import mongoose from 'mongoose'

// Permitir que solo los campos definidos del esquema sean almacenados en la BDD
mongoose.set('strictQuery', true)

// Crear una funcion llamada connection()
const connection = async()=>{
    try {
        // Establecer la conexion con la BDD
        const {connection} = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Database is connected on ${connection.host} - ${connection.port}`)
    } catch (error) {
        // Capturar la informacion
        console.log(error);
    }
}

// Exportar la funcion
export default  connection