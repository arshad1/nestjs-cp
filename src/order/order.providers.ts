import { Order } from './entities/order.entity';

export const catsProviders = [
  {
    provide: 'ORDER_REPOSITORY',
    useValue: Order,
  },
];
