import {
  Column,
  PrimaryKey,
  Model,
  Table,
  AutoIncrement,
  HasOne,
  ForeignKey,
} from 'sequelize-typescript';
import { Cart } from 'src/cart/entities/cart.entity';
import { Product } from 'src/products/entities/product.entity';

@Table
export class Discount extends Model<Discount> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  discount_mode: string;

  @Column
  discount_type: string;

  @Column
  discount_value: number;

  @Column
  cutoff_amount: number;

  @Column
  cutoff_quantity: number;
}
