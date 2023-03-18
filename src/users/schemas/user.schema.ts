import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field } from '@nestjs/graphql';
import { Base } from 'src/customization/schemas/base.schema';

@Schema()
@ObjectType({ implements: [Base] })
export class User extends Base {
  @Prop()
  @Field(() => String)
  name: string;

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
