import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    country: string;

    @Column()
    role: string;

    @Column()
    isInvited: boolean;

    @Column()
    isRegistered: boolean;
}