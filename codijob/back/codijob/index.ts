// importando la ruta de skill
import { router_skill } from './api/routes/skill';
import { router_proyecto } from './api/routes/proyecto';
import { router_proyectoSkill } from './api/routes/proyectoskill';

//Importamos la libreria desde node modules (require para importar la libreria en node_modules)
var express = require('express'); 
// app es una instancia directa de express
var app = express();

// <---------------POST------------------>
// ESTA CONFIGURACION DEBE IR ANTES DE CUALQUIER CONFIGURACION app
// body-parser hace que se pueda ejecutar el metodo get y se guarde dentro de un arreglo llamado body
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// <--------------- / POST------------------>

// process.env.PORT es el valor que se le va a signar una vez encuetre el puerto de un servidor remoto
const PUERTO = process.env.PORT || 3700;

//importando las rutas

app.use('/api',router_skill)
app.use('/api',router_proyecto)
app.use('/api',router_proyectoSkill)

// listen es para levantar el servidor web (lanza o ejecuta el servidor web)
app.listen(PUERTO,()=>{ 
    console.log("Servidor corriendo perfectamente => localhost:3700");    
});
