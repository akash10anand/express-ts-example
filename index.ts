import express from 'express';
import path from 'path';
import prisma from './src/services/db.service';
// rest of the code remains same
const app = express();
const PORT = 8000;

app.use(express.static('public'));

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
  res
    .status(200)
    .sendFile(path.resolve(__dirname, 'src/pages/login.html'));
})

app.post('/login', async (req, res) => {
  console.log("posted");
  res.status(200);
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});