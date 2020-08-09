import {
  Column,
  PrimaryKey,
  Model,
  Table,
  AutoIncrement,
  ForeignKey,
  HasMany,
  BelongsTo,
} from 'sequelize-typescript';
import { CartItems } from './cartItems.entity';
import { Discount } from 'src/discount/discounts.entity';

@Table
export class Cart extends Model<Cart> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  user_id: number;

  @ForeignKey(() => Discount)
  @Column
  discount_rule_id: number;

  @BelongsTo(() => Discount)
  discount: Discount

  @HasMany(() => CartItems)
  cart_items: CartItems[]
}
