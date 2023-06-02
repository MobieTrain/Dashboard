import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Level extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    learning_path_id: number;

    @Column()
    title: number;
}