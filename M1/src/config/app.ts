//const url = process.env.APP_URL || 'http://localhost:5001';

export default () => ({
  port: parseInt(process.env.PORT_M1_SERVICE) || 7001,
  //url: url,
  swagger: {
    title: 'test_green API',
    desription: 'The API description',
    version: '1.0',
  },
  DATABASE_URL: process.env.DATABASE_URL,
});
