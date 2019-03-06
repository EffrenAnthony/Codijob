import { Router } from 'express';
import {controller_skills} from '../controllers/skills'
// var controller_skills = require ('../controllers/empresa')

export var router_skills = Router();


router_skills.get('/skills/getAll',controller_skills.getAll);
router_skills.get('/skills/update',controller_skills.updateById);
router_skills.get('/skills/delete',controller_skills.deleteById);
router_skills.get('/skills/create',controller_skills.create);