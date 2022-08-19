import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Geolocation extends Document {
  @Prop()
  identifier: string;

  @Prop()
  latitude: number;

  @Prop()
  longitude: number;

  @Prop()
  checkIn: string;

  @Prop()
  checkOut: string;

  @Prop()
  checkLocation: [number, number];
}

export const GeolocationSchema = SchemaFactory.createForClass(Geolocation);
