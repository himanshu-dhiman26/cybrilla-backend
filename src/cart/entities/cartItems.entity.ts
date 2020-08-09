import {
  Column,
  PrimaryKey,
  Model,
  Table,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Cart } from './cart.entity';
import { Product } from 'src/products/entities/product.entity';

@Table
export class CartItems extends Model<CartItems> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @ForeignKey(() => Cart)
  @Column
  cart_id: number;

  @ForeignKey(() => Product)
  @Column
  product_id: number;

  @Column
  quantity: number;

  @BelongsTo(() => Product)
  product: Product;
}
