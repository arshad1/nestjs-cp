import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { catsProviders } from './order.providers';

@Module({
  controllers: [OrderController],
  providers: [OrderService, ...catsProviders],
})
export class OrderModule {}
