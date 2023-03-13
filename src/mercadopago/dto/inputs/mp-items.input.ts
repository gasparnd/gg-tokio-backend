import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class ItemsInput {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly unit_price: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly quantity: number;
}
