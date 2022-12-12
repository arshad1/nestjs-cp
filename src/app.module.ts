import {Module} from '@nestjs/common';
import {AppService} from './app.service';
import {databaseProviders} from './database.providers';
import {OrderModule} from './order/order.module';
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [OrderModule, ConfigModule.forRoot({isGlobal: true}),
    ],
    providers: [AppService, ...databaseProviders],
    exports: [...databaseProviders],
})
export class AppModule {
}
