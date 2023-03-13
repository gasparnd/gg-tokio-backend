import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateGeolocationInput {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'region name' })
  readonly identifier: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'region latitude' })
  readonly latitude: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'region longitude' })
  readonly longitude: number;

  @IsDate()
  @IsOptional()
  @ApiProperty({ description: 'region checkIn' })
  readonly checkIn: Date;

  @IsDate()
  @IsOptional()
  @ApiProperty({ description: 'region checkOut' })
  readonly checkOut: Date;

  @IsArray()
  @IsOptional()
  @ApiProperty({ description: 'region check location [longitude, longitude]' })
  readonly checkLocation: [number, number];
}
