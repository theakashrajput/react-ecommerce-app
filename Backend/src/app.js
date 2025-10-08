import express from 'express';
import authRoute from './routes/auth.route.js'
import indexRoute from './routes/index.route.js';
import cookieParser from 'cookie-parser';

const app = express();

//Middlewares
app.use(express.json());
app.use(cookieParser());

//Routes

app.use('/auth', authRoute);
app.use('/', indexRoute);

export default app;