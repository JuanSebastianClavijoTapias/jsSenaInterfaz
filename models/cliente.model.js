
const mongoose = require('../config/conexiondb');

const clienteSchema = new mongoose.Schema({

  nombre: { 
    type: String, 
    required: true 
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  telefono: {
     type: String 
    }

});

module.exports = mongoose.model('clientes', clienteSchema);