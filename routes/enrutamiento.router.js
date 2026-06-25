const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');

router.get('/', clienteController.listar)
router.get('/up', clienteController.update)
router.post('/clientes/actualizar', clienteController.actualizar)


router.get('/clientes/:correo', clienteController.buscar)
router.post('/clientes', clienteController.registrar)
router.get('/formulario', clienteController.formulario)

module.exports = router





