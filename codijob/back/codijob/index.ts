// importando la ruta de home
import { router_home } from './api/routes/home';
// importando la ruta de empresas
import { router_empresa } from './api/routes/empresa';
import { router_skill } from './api/routes/skill';
//Importamos la libreria desde node modules (require para importar la libreria en node_modules)
var express = require('express'); 
// app es una instancia directa de express
var app = express();

// realizando la conexion a MySql
var mysql = require ('mysql');
export var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'punkAnthony95',
    database: 'codijob'
});

// global en node representa un objeto donde guardaremos variables que usaremos en cualquier 
// archivo del proyecto

// global.db = connection;

// process.env.PORT es el valor que se le va a signar una vez encuetre el puerto de un servidor remoto
const PUERTO = process.env.PORT || 3700;

//importando las rutas
// use => settea configuraciones de rutas, middlewares, cores, etc
// use representa a la ruta padre de toda la api
// ejemplo, si => app.use('/api',router_homre)
// seria => localhost:3700/api/otraruta
app.use('/api',router_home)
app.use('/api',router_empresa)
app.use('/api',router_skill)
// listen es para levantar el servidor web (lanza o ejecuta el servidor web)
// parametros => puerto, callback para indicar si se ejecutó correctamente
app.listen(PUERTO,()=>{

    connection.connect((error:any)=>{
        if (error) {
            throw(error);            
        }
        console.log("Conectado a la base de datos correctamente");        
    });

    console.log("Servidor corriendo perfectamente => localhost:3700");    
});
