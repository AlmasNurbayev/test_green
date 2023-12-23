import dotenv from 'dotenv';

import { Receiving } from './modules/receiving';

async function Bootstrap() {
  dotenv.config();
  console.log('Hello M2!');
  await Receiving();
}

Bootstrap();
