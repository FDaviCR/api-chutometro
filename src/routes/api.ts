import { Router } from 'express';

import * as UserController from '../controllers/userController';
import * as ChampionshipController from '../controllers/championshipController';

const router = Router();

router.get('/ping', UserController.ping);

// Endpoints de Login
router.post('/user/register', UserController.register);
router.get('/user/list', UserController.list);
router.post('/login', UserController.login);

// Endpoints de Campeonato
router.post('/championship/create', ChampionshipController.create);
router.get('/championship/read', ChampionshipController.list);
router.put('/championship/update/:id', ChampionshipController.update);
router.delete('/championship/delete/:id', ChampionshipController.destroy);


export default router;