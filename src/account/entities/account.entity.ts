import { Sequelize } from 'sequelize';
import { Column, DataType, Model, Table, } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

@Table({
    tableName: 'account',
    timestamps: true
})
export class Account extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.TEXT('long')
    })
    store_name: string;

    @Column({
        type: DataType.TEXT('long')
    })
    email: string;

    @Column({
        type: DataType.TEXT('long')
    })
    contact_person_name: string;

    @Column({
        type: DataType.TEXT('long')
    })
    mobile: string;

    @Column({
        type: DataType.TEXT('long')
    })
    alternate_mobile: string;

    @Column({
        type: DataType.TEXT('long')
    })
    werehouse: string;

    @Column({
        type: DataType.TEXT('long')
    })
    route: string;

    @Column({
        type: DataType.TEXT('long')
    })
    store_category: string;

    @Column({
        type: DataType.TEXT('long')
    })
    grade: string;

    @Column({
        type: DataType.TEXT('long')
    })
    gst: string;

    @Column({
        type: DataType.TEXT('long')
    })
    street_name: string;

    @Column({
        type: DataType.TEXT('long')
    })
    city: string;

    @Column({
        type: DataType.TEXT('long')
    })
    state: string;

    @Column({
        type: DataType.TEXT('long')
    })
    panchayath: string;

    @Column({
        type: DataType.TEXT('long')
    })
    district: string;

    @Column({
        type: DataType.TEXT('long')
    })
    pincode: string;

    @Column({
        type: DataType.TEXT('long')
    })
    description: string;

    @Column({
        type: DataType.TEXT('long'),
    })
    account_url: string;
}


