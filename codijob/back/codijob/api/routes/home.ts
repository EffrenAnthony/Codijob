import { Router, Request, Response} from 'express';

// Hacemos el enrutador exportable para que el index.ts pueda importarlo
export var router_home = Router();

// get es el verbo http que va a escuchar nuestro server
// '/' hace referencia a localhost, es decir que tambien puede ser '/direccion', y en el navegador se pondria 'localhost:3700/direccion'
// request => son los datos que el servidor recive de quien lo invoca
// response => objeto de respuesta a quien invoca la ruta
router_home.get('/', function(req:Request, res:Response){
    res.send("Hola soy el servidor =) --> 'El peluca Sape'")
});
// esta es otra ruta, pero sigue siendo router_home porque el apilará todas las rutas
router_home.get('/otraRuta', function(req:Request, res:Response){
    res.send("Otra ruta'")
});

// tambien es posible hacer que una variable sea exportable en NODE
// module.exports = router_home;