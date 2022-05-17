import { Router } from 'express';

import * as UserController from '../controllers/userController';
import * as ChampionshipController from '../controllers/championshipController';

const router = Router();

router.get('/ping', UserController.ping);

router.post('/user/register', UserController.register);
router.get('/user/list', UserController.list);
router.post('/login', UserController.login);


router.post('/championship/create', ChampionshipController.criar);


export default router;