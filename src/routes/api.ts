import { Router } from 'express';

import * as UserController from '../controllers/userController';
import * as ChampionshipController from '../controllers/championshipController';
import * as TeamController from '../controllers/teamController';
import * as MatchController from '../controllers/matchController';

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

// Endpoints de partida
router.post('/match/create', MatchController.create);
router.get('/match/read', MatchController.list);
router.put('/match/update/:id', MatchController.update);
router.delete('/match/delete/:id', MatchController.destroy);

export default router;