import { InputType, Field } from '@nestjs/graphql';
import {
  IsAlphanumeric,
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @Field(() => String)
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @IsAlphanumeric()
  @MinLength(1)
  @MaxLength(20)
  nikname: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  password: string;

  @Field(() => [String], { nullable: true })
  @IsString()
  @IsOptional()
  @IsArray()
  roles?: string[];

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
