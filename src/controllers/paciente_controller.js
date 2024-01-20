// Importar el modelo paciente
import Paciente from "../models/Paciente.js"
import { sendMailToPaciente, sendMailToRecoveryPassword } from "../config/nodemailer.js"
// Metodo para el proceso de login
const loginPaciente = (req,res)=>{
    res.send("Login del paciente")
}
// Metodo para ver el perfil
const perfilPaciente = (req,res)=>{
    res.send("Perfil del paciente")
}
// Metodo para listar todos los pacientes
const listarPacientes = async (req,res)=>{
    // Obtener todos los pacientes que se encuentren activos
    // Que sean solo los pacientes del que inicie sesion
    // Quitar campos no necesarios
    // Mostrar campos de documentos no necesarios
    const pacientes = await Paciente.find({estado:true}).where('veterinario').equals(req.veterinarioBDD).select("-salida -createdAt -updatedAt -__v").populate('veterinario','_id nombre apellido')
    // Respuesta
    res.status(200).json(pacientes)
}
// Metodo para ver el detalle de un paciente en particular
const detallePaciente = (req,res)=>{
    res.send("Detalle del paciente")
}
// Metodo para registrar un paciente
const registrarPaciente = async(req,res)=>{
    // Desestructurar el email
    const {email} = req.body
    // Validar todos los campos
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    // Obtener el usuario en base al e-mail
    const verificarEmailBDD = await Paciente.findOne({email})
    // Verificar si el paciente ya se encuentra registrado
    if(verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos, el email ya se encuentra registrado"})
    // Crear una instancia del paciente
    const nuevoPaciente = new Paciente(req.body)
    // Crear un password
    const password = Math.random().toString(36).slice(2)
    // Encriptar el password
    nuevoPaciente.password = await nuevoPaciente.encrypPassword("vet"+password)
    //Enviar el correo electronico
    await sendMailToPaciente(email,"vet"+password)
    // Asociar al paciente con el veterinario
    nuevoPaciente.veterinario=req.veterinarioBDD._id
    // Guardar en BDD
    await nuevoPaciente.save()
    // Presentar resultados
    res.status(200).json({msg:"Registro exitoso del paciente y correo enviado"})
}
// Metodo para actualizar un paciente
const actualizarPaciente = (req,res)=>{
    res.send("Actualizar paciente")
}
// Metodo para eliminar (dar de baja) un paciente
const eliminarPaciente = (req,res)=>{
    res.send("Eliminar paciente")
}

export {
	loginPaciente,
	perfilPaciente,
    listarPacientes,
    detallePaciente,
    registrarPaciente,
    actualizarPaciente,
    eliminarPaciente
}