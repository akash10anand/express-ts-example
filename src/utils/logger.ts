import { pino } from "pino";
import fs from 'fs';


const streams = [
  { stream: process.stdout },
  { stream: fs.createWriteStream('logs/log.log', { flags: 'a' }) },
]

const logger = pino({ level: 'info' }, pino.multistream(streams));


export default logger;