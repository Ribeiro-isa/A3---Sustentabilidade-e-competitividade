import express from 'express';
import taskRoutes from './routes/tasks.js';
import fs from 'fs';

// Create data folder if not exists
if (!fs.existsSync('./data')) {
  fs.mkdirSync('./data');
  fs.writeFileSync('./data/tasks.json', '[]');
}

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Task Scheduler running on http://localhost:${PORT}`);
});
