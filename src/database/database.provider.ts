import { Sequelize } from 'sequelize-typescript';
import { Account } from 'src/account/entities/account.entity';
import { Auth } from 'src/auth/entities/auth.entity';
import { BeatPlan } from 'src/beat-order/entities/beat-order.entity';
import { Invoice } from 'src/invoices/entities/invoice.entity';
import { Order } from 'src/order/entities/order.entity';
import { Payment } from 'src/payments/entities/payment.entity';
import { Product } from 'src/products/entities/product.entity';
import { Visit } from 'src/visit/entities/visit.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'Valar@1234',
                database: 'fingertipplus',
                logging: false
            });
            sequelize.addModels([Account, Auth, Product, Order, BeatPlan, Visit, Invoice, Payment]);
            await sequelize.sync({ alter: true });
            return sequelize;
        },
    },
];