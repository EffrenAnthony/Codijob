import { Router } from 'express';
import {controller_proyectoskill} from '../controllers/proyectoskill'



export var router_proyectoSkill = Router();


// router_proyectoSkill.get('/proyectoSkill/getAll',controller_proyectoSkill.getAll);
router_proyectoSkill.post('/proyectoskill/create',controller_proyectoskill.create)
router_proyectoSkill.get('/proyectoskill/proyecto/:pro_id/skills',controller_proyectoskill.getSkillsByProyectoId)
// router_proyectoSkill.post('/proyectoSkill/update',controller_proyectoSkill.update)


