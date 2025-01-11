import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { fileURLToPath } from 'url';

import crudcontroller from './controllers/crudControllers.js';

const app = express(),
    port = process.env.PORT || 3000;

const __dirname = fileURLToPath(new URL('.', import.meta.url));

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.use(express.static(path.join(__dirname, "public")));

app.get("/", crudcontroller.mainRoute);
app.post("/empleado/", crudcontroller.createEmployet);

app.listen(port, () => {
    console.log(`El servidor se está ejecutando en el http://localhost:${port}`);
});