import { join } from 'path';
import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import config from './config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeolocationModule } from './geolocation/geolocation.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { MercadopagoModule } from './mercadopago/mercadopago.module';
import { UsersModule } from './users/users.module';

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
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), './schema.gql'),
    }),
    GeolocationModule,
    DatabaseModule,
    AuthModule,
    MercadopagoModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
