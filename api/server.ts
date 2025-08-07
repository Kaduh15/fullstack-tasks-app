import express from 'express';
import { taskRouter } from './routes/task.route';
import cors from 'cors';

import 'express-async-errors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}))

app.use('/tasks', taskRouter);

app.use((_req, res, next) => {
  return res.status(404).json({ message: "Route not found" });
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

