import express from 'express';
import { debug } from './routes/sample';

const app = express();

app.get('/', debug);

app.listen(3000);