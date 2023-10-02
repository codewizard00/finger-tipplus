import { Column, DataType, Model, Table, } from 'sequelize-typescript'

@Table({
    tableName: 'beat_plan',
    timestamps: true
})
export class BeatPlan extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.TEXT('long')
    })
    year: string;

    @Column({
        type: DataType.TEXT('long')
    })
    month: string;

    @Column({
        type: DataType.TEXT('long')
    })
    executive: string;
}


