import { Field, InterfaceType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
@InterfaceType()
export class Base extends Document {
  @Prop({ unique: true })
  @Field()
  id: string;

  @Prop()
  @Field({ nullable: true })
  createdBy?: string;

  @Prop({ default: Date.now })
  @Field(() => Date)
  createdAt: Date;

  @Prop({ default: Date.now })
  @Field(() => Date)
  updatedAt: Date;
}

export const BaseSchema = SchemaFactory.createForClass(Base);
