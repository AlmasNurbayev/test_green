import { InputData } from '../types/input_data';
import { OuputData } from '../types/output_data';
import amqp from 'amqplib';

export async function Sending(data: InputData) {
  const server_name =
    process.env.RMQ_URL || 'amqp://guest:guest@localhost:5672';
  const queue_name = process.env.QUEUE_FROM_M2 || 'numbers_from_M2';
  const connection = await amqp.connect(server_name);
  const channel = await connection.createChannel();

  try {
    //await channel.assertExchange(exchange, 'direct', { durable: true });
    await channel.assertQueue(queue_name, { durable: true });
    //await channel.bindQueue(queue_name, exchange, routingKey);

    const msg: OuputData = {
      numbers_id: data.id,
      value: Number(data.value) * 2,
    };
    await channel.sendToQueue(queue_name, Buffer.from(JSON.stringify(msg)));
    console.log('published', msg);
  } catch (error) {
    console.error('Error in publishing message', error);
  }
}
