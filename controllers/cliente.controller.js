const modeloCliente = require('../models/cliente.model')


exports.listar = async (req,res)=>{
  try {
    const clientes = await modeloCliente.find();
    res.render('pages/index3', {c: clientes});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.saludar = (req,res)=>{
 
    res.render('pages/saludo');
}


exports.buscar = async (req,res)=>{
  try {
    const clientes = await modeloCliente.find(
         {email: req.params.correo}

    )
    if (!clientes) {
           return res.status(404).json({ mensaje: 'cliente no encontrado' });
       }
    res.render('pages/index3');

    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.registrar = async (req,res)=>{

  try {

    let clienteNuevo = {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,

    }
    const clientes = await modeloCliente.insertOne(clienteNuevo)
    if (!clientes) {
           return res.status(404).json({ mensaje: 'cliente no encontrado' });
       }
    res.json(clientes);

    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}



exports.actualizar = async (req,res)=>{

  try {

    let clienteNuevo = {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,

    }
    const clientes = await modeloCliente.updateOne(
        {email: req.params.correo},
        {$set:clienteNuevo}

    )
    if (!clientes) {
           return res.status(404).json({ mensaje: 'cliente no encontrado' });
       }
    res.json(clientes);

    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}



exports.borrar = async (req,res)=>{
  try {
    const clientes = await modeloCliente.deleteOne(
        {email: req.params.correo}  
    )
    if (!clientes) {
           return res.status(404).json({ mensaje: 'cliente no encontrado' });
       }
    res.json(clientes);

    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


