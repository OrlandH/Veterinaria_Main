// Importar JWT y el modelo
import jwt from 'jsonwebtoken'
import Veterinario from '../models/Veterinario.js'
import Paciente from '../models/Paciente.js'

// Metodo para proteger rutas
const verificarAutenticacion = async (req,res,next)=>{
// Validacion si se esta enviando el token
if(!req.headers.authorization) return res.status(404).json({msg:"Lo sentimos, debes proprocionar un token"})    
    // Desestructurar el token pero del headers (cabeceras)
    const {authorization} = req.headers
    // Capturar errores
    try {
        // Verificar el token recuperado con el almacenado
        const {id,rol} = jwt.verify(authorization.split(' ')[1],process.env.JWT_SECRET)
        // Verificar el rol
        if (rol==="veterinario"){
            // Obtener el usuario
            req.veterinarioBDD = await Veterinario.findById(id).lean().select("-password")
            // Continuar el proceso
            next()
        }
        else{
            req.pacienteBDD = await Paciente.findById(id).lean().select("-password")
            next()
        }
    } catch (error) {
        // Capturar errores y presentarlos
        const e = new Error("Formato del token no válido")
        return res.status(404).json({msg:e.message})
    }
}

// Exportar el modelo
export default verificarAutenticacion