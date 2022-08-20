import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    mongo: {
      dbName: process.env.MONGO_DB_NAME,
      user: process.env.MONGO_USERNAME,
      password: process.env.MONGO_PASSWORD,
      connection: process.env.MONGO_CONNECTION,
    },
    mercadopago: {
      publicKey: process.env.MERCADO_PAGO_PUBLIC_KEY,
      accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN,
    },
    apiKey: process.env.API_KEY,
  };
});
