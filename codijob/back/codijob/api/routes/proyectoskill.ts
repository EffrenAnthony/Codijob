import { Router } from 'express';
import {controller_proyectoSkill} from '../controllers/proyectoskill'

export var router_proyectoSkill = Router();


// router_proyectoSkill.get('/proyectoSkill/getAll',controller_proyectoSkill.getAll);
router_proyectoSkill.post('/proyectoSkill/create',controller_proyectoSkill.create)
// router_proyectoSkill.post('/proyectoSkill/update',controller_proyectoSkill.update)


