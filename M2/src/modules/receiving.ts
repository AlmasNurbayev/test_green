import amqp from 'amqplib';
import { ProcessMessage } from './processing';

export async function Receiving() {
  const server_name =
    process.env.RMQ_URL || 'amqp://guest:guest@localhost:5672';
  const connection = await amqp.connect(server_name);
  process.once('SIGINT', async () => {
    console.log('got sigint, closing connection');
    await channel.close();
    await connection.close();
    process.exit(0);
  });
  const channel = await connection.createChannel();
  const queue_name = process.env.QUEUE_FROM_M1 || 'numbers_from_M1';
  await channel.assertQueue(queue_name, { durable: true });
  await channel.consume(
    queue_name,
    async (msg) => {
      if (msg !== null) {
        await ProcessMessage(msg);
        channel.ack(msg);
      }
    },
    {
      noAck: false,
      consumerTag: 'numbers_consumer',
    }
  );
  console.log(
    ' [*] Waiting for messages on queue ' +
      queue_name +
      '. To exit press CTRL+C'
  );
}
