import { Sending } from './sending';
import amqp from 'amqplib';

export async function ProcessMessage(msg: amqp.ConsumeMessage) {
  console.log('received', msg.content.toString());
  const data = JSON.parse(msg.content.toString());
  await sleep(4000);
  await Sending(data.data);
}

async function sleep(milliseconds: number) {
  await new Promise((resolve) => {
    return setTimeout(resolve, milliseconds);
  });
}
