
const mongoose = require('../config/conexiondb');

const usuarioSchema = new mongoose.Schema({


  email: {
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: string, 
    lowercase:true,
    trim: true,
    minlength:[8, "contraseña muy corta"],
    maxlength:[12, "contraseña muy larga"]
  },
  rol:{
    type: string, 
    default: 'invitado',
    enum: ['cliente', 'empleado','admininstrador' ],
    minlength:[8, "contraseña muy corta"],
  },

 
});

module.exports = mongoose.model('usuario', usuarioSchema);