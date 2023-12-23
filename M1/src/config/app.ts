//const url = process.env.APP_URL || 'http://localhost:5001';

import { Transport } from '@nestjs/microservices';

export default () => ({
  port: parseInt(process.env.PORT_M1_SERVICE) || 7001,
  //url: url,
  swagger: {
    title: 'test_green API',
    desription: 'The API description',
    version: '1.0',
  },
  DATABASE_URL: process.env.DATABASE_URL,
  rmq_service: {
    name: 'rmq_service',
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RMQ_URL || 'amqp://localhost:5674'],
      queue: process.env.NUMBERS_FROM_M2 || 'numbers_from_M2',
      queueOptions: {
        durable: true,
      },
    },
  },
  rmq_client: {
    name: 'rmq_client',
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RMQ_URL || 'amqp://localhost:5674'],
      queue: process.env.NUMBERS_FROM_M1 || 'numbers_from_M1',
      queueOptions: {
        durable: true,
      },
    },
  },
});
