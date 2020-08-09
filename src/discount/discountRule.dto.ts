import {
  IsNotEmpty,
  IsInt,
  IsNotEmptyObject,
} from 'class-validator';

export class DiscountDto {
  @IsNotEmpty()
  type: string;

  @IsInt()
  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  discount_type: string;
  
  @IsInt()
  @IsNotEmptyObject()
  discount_value: number;
}
