import { cac } from 'cac';
import { VERSION } from './index.js';

const cli = cac('aforro');

cli.version(VERSION);
cli.help();

cli.parse();
