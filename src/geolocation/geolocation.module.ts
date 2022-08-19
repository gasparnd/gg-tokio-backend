import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GeolocationController } from './geolocation.controller';
import { Geolocation, GeolocationSchema } from './geolocation.schema';
import { GeolocationService } from './geolocation.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Geolocation.name, schema: GeolocationSchema },
    ]),
  ],
  controllers: [GeolocationController],
  providers: [GeolocationService],
})
export class GeolocationModule {}
