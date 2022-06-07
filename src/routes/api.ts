import { Router } from 'express';

import * as LoginController from '../controllers/loginController';
import * as UserController from '../controllers/userController';
import * as ChampionshipController from '../controllers/championshipController';
import * as TeamController from '../controllers/teamController';
import * as MatchController from '../controllers/matchController';
import * as ResultController from '../controllers/resultController';

const router = Router();

router.get('/ping', UserController.ping);

// Endpoints de Login
router.post('/login', LoginController.login);

// Endpoints de Usuario
router.post('/user/create', UserController.create);
router.get('/user/read', UserController.read);

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

// Endpoints de resultado
router.put('/result/update/:id', ResultController.update);

export default router;