import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users extends BaseEntity {

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
    last_me: Date;

    // @Column({ nullable: true })
    // eula_accepted_at: Date | null;
}