import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  HasOne,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Customer } from './customer.entity';
import { Agent } from './agent.entity';

@Table({ tableName: 'orders' })
export class Order extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  id: number;

  @Column
  ORD_NUM: number;

  @Column
  CUST_NAME: string;

  @Column(DataType.DOUBLE(10, 2))
  ORD_AMOUNT: number;

  @Column(DataType.DOUBLE(10, 2))
  ADVANCE_AMOUNT: number;

  @Column(DataType.DATE)
  ORD_DATE: string;

  @ForeignKey(() => Customer)
  @Column
  CUST_CODE: number;

  @ForeignKey(() => Agent)
  @Column
  AGENT_CODE: number;

  @Column
  ORD_DESCRIPTION: string;

  @Column(DataType.DATE)
  created_at: string;

  @Column(DataType.DATE)
  updated_at: string;

  @BelongsTo(() => Customer, 'CUST_CODE')
  customer: Customer;

  @BelongsTo(() => Agent, 'AGENT_CODE')
  agent: Agent;
}
