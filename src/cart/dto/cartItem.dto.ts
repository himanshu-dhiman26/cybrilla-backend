import {
  IsNotEmpty,
} from 'class-validator';

export class CartItemDto {
  @IsNotEmpty()
  product_id: number;

  @IsNotEmpty()
  quantity: string;
}
