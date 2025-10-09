import express from 'express';
import authRoute from './routes/auth.route.js'
import indexRoute from './routes/index.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

//Middlewares
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
    }
))
app.use(express.json());
app.use(cookieParser());

//Routes

app.use('/auth', authRoute);
app.use('/', indexRoute);

export default app;