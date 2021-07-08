import express from 'express';
import cors from 'cors';

import './database/connection';

import 'express-async-errors';

import routes from './routes';
const app = express();

app.use(cors());
/*Para n precissar instalar o body-parser*/
app.use(express.json());
app.use(routes);

app.listen(3333);