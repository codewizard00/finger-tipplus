import { Column, DataType, Model, Table, } from 'sequelize-typescript';


@Table({
    tableName: 'users',
    timestamps: true
})
export class Auth extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.TEXT('long')
    })
    email: string;

    @Column({
        type: DataType.TEXT('long')
    })
    password: string;

}


