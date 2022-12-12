import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import {Order} from "./order.entity";

@Table({ tableName: 'agents' })
export class Agent extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  id: number;

  @Column
  AGENT_CODE: number;

  @Column
  AGENT_NAME: string;

  @Column
  COUNTRY: string;

  @Column
  WORKING_AREA: string;

  @Column
  PHONE_NO: number;

  @Column(DataType.DOUBLE(10, 2))
  COMMISSION: number;

  @Column(DataType.DATE)
  created_at: string;

  @Column(DataType.DATE)
  updated_at: string;

  @HasMany(() => Order)
  orders: Order[];
}

//`AGENT_CODE`, `AGENT_NAME`, `WORKING_AREA`, `PHONE_NO`, `COUNTRY`, `COMMISSION`, `created_at`, `updated_at`
