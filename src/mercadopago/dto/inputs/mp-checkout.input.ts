import { IsArray, IsNotEmpty } from 'class-validator';
import { ItemsInput } from './mp-items.input';

export class MPCheckoutInput {
  @IsNotEmpty()
  @IsArray()
  readonly items: ItemsInput[];
}
