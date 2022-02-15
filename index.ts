import express from 'express';
import { Request, Response } from 'express';
import projectRouter from './src/routes/project';
import suiteRouter from './src/routes/suit';
import testRouter from './src/routes/test';
import logger from './src/utils/logger';


const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("etag", false);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
  logger.info("pino mssg logged");
});

app.use('/project', projectRouter);
app.use('/suite', suiteRouter);
app.use('/test', testRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at port ${PORT}`);
});