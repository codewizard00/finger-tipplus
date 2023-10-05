import { Column, DataType, Model, Table, } from 'sequelize-typescript'

@Table({
    tableName: 'payments',
    timestamps: true
})
export class Payment extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.INTEGER,
    })
    invoice_id: number;

    @Column({
        type: DataType.TEXT('long')
    })
    payment_mode: string;

    @Column({
        type: DataType.TEXT('long')
    })
    status: string;

}


