import express from 'express';
import tasksRouter from './routes/tasks';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', tasksRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
