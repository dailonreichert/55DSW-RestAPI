import {Router} from 'express';
import UsuarioController  from './controllers/UsuarioController';
import ContatoController  from './controllers/ContatoController';
import CompromissoController from './controllers/CompromissoController';

const routes = Router();

/*Usuário*/
routes.get('/usuario',        UsuarioController.index);
routes.post('/usuario',       UsuarioController.create);
routes.post('/usuario/login', UsuarioController.login);

/*Contato*/
routes.get('/contato',     ContatoController.index);
routes.post('/contato',    ContatoController.create);
routes.put('/contato/:id', ContatoController.update);

/*Compromisso*/
routes.get('/compromisso',        CompromissoController.index);
routes.post('/compromisso',       CompromissoController.create);
routes.delete('/compromisso/:id', CompromissoController.delete);

export default routes;