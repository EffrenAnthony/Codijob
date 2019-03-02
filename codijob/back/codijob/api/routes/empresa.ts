import { Router } from 'express';
import {controller_empresa} from '../controllers/empresa'
// var controller_empresa = require ('../controllers/empresa')

export var router_empresa = Router();


router_empresa.get('/empresa/getAll',controller_empresa.getAll);
router_empresa.get('/empresa/update',controller_empresa.updateById);
router_empresa.get('/empresa/delete',controller_empresa.deleteById);
router_empresa.get('/empresa/create',controller_empresa.create);
