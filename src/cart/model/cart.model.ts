import {
  Column,
  PrimaryKey,
  Model,
  Table,
  AutoIncrement,
  DataType,
} from 'sequelize-typescript';

@Table
export class Cart extends Model<Cart> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  user_id: number;

  @Column({ type: DataType.JSON })
  cart_items: string;

  @Column({ type: DataType.JSON })
  discount_rules: string;
}
