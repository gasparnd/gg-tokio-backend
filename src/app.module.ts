import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeolocationModule } from './geolocation/geolocation.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { MercadopagoModule } from './mercadopago/mercadopago.module';
import * as Joi from 'joi';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.string().required(),
        MONGO_DB_NAME: Joi.string().required(),
        MONGO_USERNAME: Joi.string().required(),
        MONGO_PASSWORD: Joi.string().required(),
        MONGO_CONNECTION: Joi.string().required(),
        MERCADO_PAGO_PUBLIC_KEY: Joi.string().optional(),
        MERCADO_PAGO_ACCESS_TOKEN: Joi.string().optional(),
      }),
    }),
    GeolocationModule,
    DatabaseModule,
    AuthModule,
    MercadopagoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
