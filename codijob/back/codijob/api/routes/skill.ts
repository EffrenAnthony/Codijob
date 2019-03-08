import { Router } from 'express';
import {controller_skill} from '../controllers/skill'
// var controller_skill = require ('../controllers/empresa')

export var router_skill = Router();


router_skill.get('/skill/getAll',controller_skill.getAll);
router_skill.post('/skill/create',controller_skill.create)
router_skill.post('/skill/update',controller_skill.update)


// router_skill.get('/skill/update',controller_skill.updateById);
// router_skill.get('/skill/delete',controller_skill.deleteById);
// router_skill.get('/skill/create',controller_skill.create);