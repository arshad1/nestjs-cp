import {
    Controller,
    Get,
    Query,
} from '@nestjs/common';
import {OrderService} from './order.service';
import {Order} from './entities/order.entity';

@Controller('api/order')
export class OrderController {
    constructor(private readonly orderService: OrderService) {
    }

    @Get()
    public findGrouped(@Query() query) {
        return this.orderService.findGrouped();
    }

    @Get('paginated')
    public findAll(@Query() query): Promise<Order[]> {
        console.log(query.page);
        const page = query.page ? query.page : 1;
        const limit = query.limit ? query.limit : 100;
        return this.orderService.findAll(page, limit);
    }

    @Get('paginated/with-joins')
    public findAllWithJoins(@Query() query): Promise<Order[]> {
        console.log(query.page);
        const page = query.page ? query.page : 1;
        const limit = query.limit ? query.limit : 100;
        return this.orderService.findAllWithJoins(page, limit);
    }
}
