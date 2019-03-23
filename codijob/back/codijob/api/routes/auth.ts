import { Router } from 'express';
import {controller_auth} from '../controllers/auth'


export var router_auth = Router();


router_auth.post('/auth/register',controller_auth.create);
router_auth.post('/auth/login',controller_auth.login);