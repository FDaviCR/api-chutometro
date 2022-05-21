import { Router } from 'express';

import * as UserController from '../controllers/userController';
import * as ChampionshipController from '../controllers/championshipController';
import * as TeamController from '../controllers/teamController';

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

// Endpoints de Time 
router.post('/team/create', TeamController.create);
router.get('/team/read', TeamController.list);
router.put('/team/update/:id', TeamController.update);
router.delete('/team/delete/:id', TeamController.destroy);


export default router;