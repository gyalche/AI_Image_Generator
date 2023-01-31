import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoDb from './Db/mongo.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();
const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));

//endpoint;
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);
mongoDb();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => [
  console.log(`Server is running on http://localhost:${PORT}`),
]);
