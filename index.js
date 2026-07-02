//estamos utilizando express toca guardarlo en una variable con su constructor
//el require es como el import de python 
const express = require('express')
const clienteController = require('./controllers/cliente.controller')
const app = express()
//require es como el import de python para traer codigo de otros archivos
const path = require('path')
app.use(express.static(path.join(__dirname, './public')));


app.use(express.json())
app.use(express.urlencoded({extended:false}))

const enrutamiento = require('./routes/enrutamiento.router')

app.use('/api/v1', enrutamiento)

app.set('view engine', 'ejs');


//crear el endponint para poder hacer en local el consumo del api
//esto es una api restfull get, post, put, delete

app.listen(process.env.PORT || 8000)

/*el proceso para crear un proyecto en django es
    1. npm init
    2.npm i dependencias a utilizar
    2.npm i dependencias -D de desarrollo
    3. actualizar el package para los scripts start con el main.js, dev: nodemon para el desarrollo
    4. crear el archivo y estructura para utilizar el express en variable crear la app y el listen que es el puerto
    
*/

const servicioemail = require('./services/email.service')
app.get('/enviar', servicioemail.sendEmail)
