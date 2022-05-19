import { Router } from 'express';

import * as UserController from '../controllers/userController';
import * as ChampionshipController from '../controllers/championshipController';

const router = Router();

router.get('/ping', UserController.ping);

router.post('/user/register', UserController.register);
router.get('/user/list', UserController.list);
router.post('/login', UserController.login);


router.post('/championship/create', ChampionshipController.create);
router.get('/championship/read', ChampionshipController.list);
router.put('/championship/update', ChampionshipController.update);
router.delete('/championship/delete', ChampionshipController.destroy);


export default router;