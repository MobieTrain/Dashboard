import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Skill extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    level_id: number;

    @Column()
    title: number;
}