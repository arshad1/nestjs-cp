import {Sequelize} from 'sequelize-typescript';
import {Order} from './order/entities/order.entity';
import {Agent} from './order/entities/agent.entity';
import {Customer} from './order/entities/customer.entity';
import * as dotenv from 'dotenv'

dotenv.config()

export const databaseProviders = [
    process.env.DB_DIALECT == 'mysql' ? {
            provide: 'SEQUELIZE_MYSQL',
            useFactory: async () => {
                const sequelize = new Sequelize({
                    dialect: 'mysql',
                    host: process.env.DB_HOST,
                    port: parseInt(process.env.MYSQL_DB_PORT),
                    username: process.env.DB_USER,
                    password: process.env.DB_PASS,
                    database: process.env.DB_NAME,
                    define: {
                        timestamps: false,
                    },
                });
                sequelize.addModels([Order, Agent, Customer]);
                await sequelize.sync();
                return sequelize;
            },
        } :
        {
            provide: 'SEQUELIZE_POSTGRES',
            useFactory: async () => {
                const sequelize = new Sequelize({
                    dialect: 'postgres',
                    host: process.env.DB_HOST,
                    port: parseInt(process.env.PG_DB_PORT),
                    username: process.env.DB_USER,
                    password: process.env.DB_PASS,
                    database: process.env.DB_NAME,
                    define: {
                        timestamps: false,
                    },
                });
                sequelize.addModels([Order, Agent, Customer]);
                await sequelize.sync();
                return sequelize;
            },
        },
];
