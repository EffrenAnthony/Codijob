import { Router,Response,Request } from 'express';
import {controller_usuario} from '../controllers/usuario'
import { NextFunction } from 'connect';



export var router_usuario = Router();

var verificar = (req:any,res:Response,next:NextFunction)=>{
    console.log(req.headers);
    const bearerHeader = req.headers["authorization"];
    console.log(bearerHeader);
    if(typeof bearerHeader !== 'undefined'){
        const token  = bearerHeader.split(" ")[1];
        req.token = token;
        // el request wue llega al req.tokrn, emdiane el next, va a la funcipn provada del controlador
        next();
        
    }else{
        res.status(403).send("PROHIBIDO");
    }
    
}

// router_usuario.get('/usuario/getAll',controller_usuario.getAll);
router_usuario.post('/usuario/create/:per_id',controller_usuario.create);
router_usuario.post('/usuario/privado',verificar,controller_usuario.privado);
// router_usuario.post('/usuario/update',controller_usuario.update)
