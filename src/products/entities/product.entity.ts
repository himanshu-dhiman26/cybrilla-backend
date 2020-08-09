import {
  Column,
  PrimaryKey,
  Model,
  Table,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Discount } from 'src/discount/discounts.entity';

@Table
export class Product extends Model<Product> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column
  price: number;

  @ForeignKey(() => Discount)
  @Column
  discount_rule_id: number;

  @BelongsTo(() => Discount)
  discount: Discount
}
