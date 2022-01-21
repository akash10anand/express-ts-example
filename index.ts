import express from 'express';
import path from 'path';
import prisma from './src/services/db.service';
// rest of the code remains same
const app = express();
const PORT = 8000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

function fibonacci(num: number): number {
  if (num <= 1) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.get('/projects', async (req, res) => {
  const projects = await prisma.projects.findMany();
  res
    .status(200)
    .json(projects);
})

app.get('/home', async (req, res) => {
  res
    .status(200)
    .sendFile(path.resolve(__dirname, 'src/pages/home.html'));
})

app.get('/login', async (req, res) => {
  // let x = fibonacci(40);
  res
    .status(200)
    .sendFile(path.resolve(__dirname, 'src/pages/login.html'));
})

app.post('/login', async (req, res) => {
  console.log(req.body);
  res.send('Got a POST request');
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});