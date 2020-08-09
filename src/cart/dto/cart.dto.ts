import {
  IsOptional,
  IsNotEmptyObject,
} from 'class-validator';
import { DiscountDto } from "../../discount/discountRule.dto";

export class CartDto {
  @IsOptional()
  id: number;

  @IsOptional()
  user_id: number;

  @IsNotEmptyObject()
  discount_rules: DiscountDto;
}
