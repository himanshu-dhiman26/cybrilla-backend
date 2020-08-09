import {
  Column,
  PrimaryKey,
  Model,
  Table,
  AutoIncrement,
  DataType,
} from 'sequelize-typescript';

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

  @Column({ type: DataType.JSON })
  discount_rules: string;
}
