import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Translation extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column()
    i18n_id: number;

    @Column()
    locale_id: number;
}