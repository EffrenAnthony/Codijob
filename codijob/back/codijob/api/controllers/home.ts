import {Request, Response} from 'express';
// export 
var controller_home = {
    home: function(req:Request,res:Response){
        res.send("Hola soy el servidor =) --> 'El peluca Sape'")
    },
    otraruta:
    function(req:Request,res:Response){
        res.send("Esta es otra ruta")
    }
}

// Si usamos 
// module.exports = controller_home
// en otro archivo lo importamos como:
// => var [nombre_cualquiera] = require('[ruta_del_archivo]');

// Si usamos
// export var controller_home = ......
// En otro archivo lo importamos como
// Import {controller_home} from 'ruta_del_archivo';
module.exports = controller_home;