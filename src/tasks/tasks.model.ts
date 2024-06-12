import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({tableName: "tasks"})
export class Tasks extends Model {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING})
    title: string

    @Column({type: DataType.STRING})
    status: string
}