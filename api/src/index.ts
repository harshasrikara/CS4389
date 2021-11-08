import express from 'express';
import { debug } from './routes/sample';
import { create_user, check_user } from './routes/userroutes';



const app = express();

//To handle POST data
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', debug);

app.post('/createUser', create_user);

app.post('/checkUser', check_user);

app.listen(3000);


