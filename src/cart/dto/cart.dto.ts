import {
  IsOptional,
  IsNotEmptyObject,
} from 'class-validator';

export class CartDto {
  @IsOptional()
  id: number;

  @IsOptional()
  user_id: number;

  @IsOptional()
  cart_items: string;

  @IsNotEmptyObject()
  discount_rules: string;
}
