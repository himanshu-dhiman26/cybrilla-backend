import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Discount } from './discounts.entity';
import { DiscountDto } from "./discountRule.dto"

@Injectable()
export class DiscountService {
  constructor(
    @InjectModel(Discount)
    private discountRepository: typeof Discount,
  ) {}

  async create(discount: DiscountDto): Promise<Discount> {
    return await this.discountRepository.create({
      discount_value: discount.discount_value,
      discount_type: discount.discount_type,
      discount_mode: discount.discount_mode,
      cutoff_amount: discount.cutoff_amount ? discount.cutoff_amount : null,
      cutoff_quantity: discount.cutoff_quantity ? discount.cutoff_quantity : null,
    });
  }

}
