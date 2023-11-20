import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { connectDB } from './dbConfig';
import router from './router';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`🍻Express your love for beer at port ${PORT}`);
});

export default app;