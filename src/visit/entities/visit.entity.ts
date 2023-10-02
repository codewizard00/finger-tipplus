
import { Sequelize } from 'sequelize';
import { Column, DataType, Model, Table, } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

@Table({
    tableName: 'visit',
    timestamps: true
})
export class Visit extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.INTEGER,
    })
    beat_id: number;

    @Column({
        type: DataType.DATE,
    })
    start_date: string;

    @Column({
        type: DataType.DATE
    })
    end_date: string;

    @Column({
        type: DataType.TEXT('long')
    })
    title: string;

}


