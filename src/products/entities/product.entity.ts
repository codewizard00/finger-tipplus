import { Sequelize } from 'sequelize';
import { Column, DataType, Model, Table, } from 'sequelize-typescript';


@Table({
    tableName: 'product',
    timestamps: true
})
export class Product extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.TEXT('long')
    })
    product_name: string;

    @Column({
        type: DataType.TEXT('long')

    })
    product_code: string;

    @Column({
        type: DataType.STRING(256),
        defaultValue: "Finger Tip Plus"
    })
    owner_name: string;

    @Column({
        type: DataType.TEXT('long')
    })
    distributive_price: string;

    @Column({
        type: DataType.TEXT('long')
    })
    tax_percent: string;


    @Column({
        type: DataType.TEXT('long')
    })
    item_description: string;

    @Column({
        type: DataType.TEXT('long')
    })
    distributive_price_percent: string;
    @Column({
        type: DataType.TEXT('long')
    })
    list_price: string;

    @Column({
        type: DataType.TEXT('long')
    })
    color: string;

    @Column({
        type: DataType.TEXT('long')
    })
    size: string;
    @Column({
        type: DataType.TEXT('long')
    })
    description: string;
    @Column({
        type: DataType.TEXT('long')
    })
    product_image_url: string;
    @Column({
        type: DataType.TEXT('long')
    })
    product_catergory_name: string;

    @Column({
        type: DataType.STRING(256),
        defaultValue: "Finger Tip Plus"
    })
    product_created_by: string;

    @Column({
        type: DataType.STRING(256),
        defaultValue: "Finger Tip Plus"
    })
    product_modified_by: string;
}


