import { Router } from 'express';
import {controller_proyecto} from '../controllers/proyecto'

export var router_proyecto = Router();


router_proyecto.get('/proyecto/getAll',controller_proyecto.getAll);
router_proyecto.post('/proyecto/create',controller_proyecto.create)
router_proyecto.post('/proyecto/update',controller_proyecto.update)


