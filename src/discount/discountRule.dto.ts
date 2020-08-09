import {
  IsNotEmpty,
  IsInt,
  IsOptional,
} from 'class-validator';

export class DiscountDto {
  @IsInt()
  @IsOptional()
  id: number;

  @IsNotEmpty()
  discount_mode: string;

  @IsNotEmpty()
  discount_type: string;

  @IsInt()
  @IsNotEmpty()
  discount_value: number;

  @IsInt()
  @IsOptional()
  cutoff_amount: number;

  @IsInt()
  @IsOptional()
  cutoff_quantity: number;
}
