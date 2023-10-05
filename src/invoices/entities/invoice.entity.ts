import { Column, DataType, Model, Table, } from 'sequelize-typescript'

@Table({
    tableName: 'invoices',
    timestamps: true
})
export class Invoice extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.INTEGER,
    })
    account_id: number;

    @Column({
        type: DataType.INTEGER,
    })
    order_id: number;

    @Column({
        type: DataType.TEXT('long')
    })
    excise_duty: string;

    @Column({
        type: DataType.DATE
    })
    due_date: string;

    @Column({
        type: DataType.TEXT('long')
    })
    status: string;


}


