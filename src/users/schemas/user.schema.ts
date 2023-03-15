import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@Schema()
@ObjectType()
export class User extends Document {
  @Prop()
  @Field(() => ID)
  id: string;

  @Prop()
  @Field(() => String)
  firstName: string;

  @Prop()
  @Field(() => String)
  lastName: string;

  @Prop({ unique: true })
  @Field(() => String)
  email: string;

  @Prop({ unique: true })
  @Field(() => String)
  nikname: string;

  @Prop()
  @Field(() => String)
  password: string;

  @Prop({ default: ['user'] })
  @Field(() => [String], { nullable: true })
  roles: string[];

  @Prop({ default: true })
  @Field(() => Boolean, { nullable: true })
  isActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
