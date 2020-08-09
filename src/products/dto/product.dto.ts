import {
  IsNotEmpty,
  IsInt,
  IsOptional,
  IsNotEmptyObject,
} from 'class-validator';
import { DiscountDto } from '../../discount/discountRule.dto';

export class ProductDto {
  @IsOptional()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  price: string;

  @IsNotEmptyObject()
  discount_rules: DiscountDto;
}
