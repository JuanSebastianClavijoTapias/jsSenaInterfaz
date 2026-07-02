const modeloCliente = require('../models/cliente.model')
const service = require('../services/email.service')

exports.listar = async (req,res)=>{
  try {
    const clientes = await modeloCliente.find();
    res.render('pages/index3', {c: clientes});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.formulario = async(req, res)=>{
  const email = req.body.email
  const asunto = req.body.asunto
  const mensaje = req.body.mensaje
  await service.sendEmail(email, asunto, mensaje)
  res.render('pages/index3')
  
}

