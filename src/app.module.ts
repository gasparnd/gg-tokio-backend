import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeolocationModule } from './geolocation/geolocation.module';

@Module({
  imports: [GeolocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
