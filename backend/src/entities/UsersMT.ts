import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    username: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    role_id: number;
}