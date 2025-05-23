import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm'

@Entity()
export class Item {

        @PrimaryGeneratedColumn()
        id:number;

        @Column()
        name:string;

        @Column()
        description:string;

        @Column()
        price:number;

        @Column()
        quantity:number;

        @Column()
        category:string;

}