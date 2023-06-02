import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Module extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    skill_id: number;

    @Column()
    title: number;
}