import { Sequelize } from 'sequelize';
import { Column, DataType, Model, Table, } from 'sequelize-typescript';


@Table({
    tableName: 'order',
    timestamps: true
})
export class Order extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.INTEGER
    })
    account_id: number;

    @Column({
        type: DataType.INTEGER
    })
    product_id: number;

    @Column({
        type: DataType.TEXT('long')
    })
    unit_price: string;

    @Column({
        type: DataType.TEXT('long')
    })
    item_tax: string;

    @Column({
        type: DataType.TEXT('long')
    })
    quantity: string;

    @Column({
        type: DataType.TEXT('long')
    })
    total: string;

}


