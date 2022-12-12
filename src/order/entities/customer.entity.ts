import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Agent } from './agent.entity';
import { Order } from './order.entity';

@Table({ tableName: 'customers' })
export class Customer extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  id: number;

  @Column
  CUST_CODE: number;

  @Column
  CUST_NAME: string;

  @Column
  CUST_CITY: string;

  @Column
  WORKING_AREA: string;

  @Column
  CUST_COUNTRY: string;

  @Column
  PHONE_NO: number;

  @Column
  AGENT_CODE: number;

  @Column
  GRADE: number;

  @Column(DataType.DOUBLE(10, 2))
  OPENING_AMT: number;

  @Column(DataType.DOUBLE(10, 2))
  RECEIVE_AMT: number;

  @Column(DataType.DOUBLE(10, 2))
  PAYMENT_AMT: number;

  @Column(DataType.DOUBLE(10, 2))
  OUTSTANDING_AMT: number;

  @Column(DataType.DATE)
  created_at: string;

  @Column(DataType.DATE)
  updated_at: string;

  @HasMany(() => Order)
  orders: Order;
}
