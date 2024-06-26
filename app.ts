import express from 'express';
import cors from 'cors';
import routes from './routes/index';
import errHandler from './middlewares/errHandler';

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);
app.use(errHandler);

const PORT: number = parseInt(process.env.PORT?.toString() || '3000');
app.listen(PORT, () =>{
    console.log(`Hospital Dashboard = listen to port:`, PORT)
})

export default app;
