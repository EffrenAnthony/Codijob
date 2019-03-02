// importando la ruta de home
import { router_home } from './api/routes/home';
//Importamos la libreria desde node modules (require para importar la libreria en node_modules)
var express = require('express'); 
// app es una instancia directa de express
var app = express();

// process.env.PORT es el valor que se le va a signar una vez encuetre el puerto de un servidor remoto

const PUERTO = process.env.PORT || 3700;

//importando las rutas

// use => settea configuraciones de rutas, middlewares, cores, etc
// use representa a la ruta padre de toda la api
// ejemplo, si => app.use('/api',router_homre)
// seria => localhost:3700/api/otraruta
app.use('/api',router_home)
// listen es para levantar el servidor web (lanza o ejecuta el servidor web)
// parametros => puerto, callback para indicar si se ejecutó correctamente
app.listen(PUERTO,()=>{
    console.log("Servidor corriendo perfectamente => localhost:3700");    
});
