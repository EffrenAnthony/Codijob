import { Router } from 'express';
import {controller_usuario} from '../controllers/usuario'



export var router_usuario = Router();


// router_usuario.get('/usuario/getAll',controller_usuario.getAll);
router_usuario.post('/usuario/create/:per_id',controller_usuario.create)
router_usuario.get('/usuario/proyecto/skills/',controller_usuario.getAll)
// router_usuario.post('/usuario/update',controller_usuario.update)
