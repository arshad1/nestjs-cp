import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Customer } from './entities/customer.entity';
import { Agent } from './entities/agent.entity';
import sequelize from 'sequelize';

@Injectable()
export class OrderService {
  constructor(
    @Inject('ORDER_REPOSITORY')
    private orderRepository: typeof Order,
  ) {}

  findAll(page: number, pageSize: number) {
    return this.orderRepository.findAll<Order>(
      this.paginate(
        {
          where: {}, // conditions
        },
        { page, pageSize },
      ),
    );
  }

  findAllWithJoins(page: number, pageSize: number) {
    const pg = this.paginate(
      {
        where: {}, // conditions
      },
      { page, pageSize },
    );

    return this.orderRepository.findAll<Order>({
      include: [
        {
          model: Agent,
        },
        {
          model: Customer,
        },
      ],
      ...pg,
    });
  }

  findGrouped() {
    return this.orderRepository.findAll<Order>({
      attributes: [

        [sequelize.fn('COUNT', sequelize.col('id')), 'cnt'],
        [sequelize.fn('MAX', sequelize.col('ORD_AMOUNT')), 'name'],

      ],
      group: 'CUST_CODE',
    });
  }

  paginate(query, { page, pageSize }) {
    const limit = parseInt(pageSize);
    const offset = (page - 1) * limit;

    console.log(page, pageSize);
    // const offset = page * pageSize;
    //const limit = pageSize;

    return {
      ...query,
      offset,
      limit,
    };
  }
}
