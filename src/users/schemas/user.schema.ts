import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

@Schema()
@ObjectType()
export class User extends Document {
  @Prop()
  @Field(() => String)
  firstName: string;

  @Prop()
  @Field(() => String)
  lastName: string;

  @Prop()
  @Field(() => String)
  email: string;

  @Prop()
  @Field(() => String)
  password: string;

  @Prop()
  @Field(() => [String], { nullable: true })
  roles: string[];

  @Prop()
  @Field(() => Boolean, { nullable: true })
  isActive: boolean;
}

export const GeolocationSchema = SchemaFactory.createForClass(Geolocation);
