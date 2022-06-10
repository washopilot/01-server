import Server from './src/classes/server';
import { SERVER_PORT } from './src/global/enviroment';
import { router } from './src/routes/router';
import cors from 'cors';

import bodyParser from 'body-parser';

const server = Server.instance;

// BodyParser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// CORS
server.app.use(cors({ origin: true, credentials: true }));

// Rutas de servicios
server.app.use('/', router);

server.start(() => console.log(`Servidor corriendo en el puerto ${SERVER_PORT}`));
