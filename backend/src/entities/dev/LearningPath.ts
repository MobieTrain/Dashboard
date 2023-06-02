import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LearningPath extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    account_id: number;

    @Column()
    slug: string;

    @Column('tinyint', {
        width: 1,
        default: 0,
        transformer: {
          to: (value: boolean) => (value ? 1 : 0),
          from: (value: number) => value !== 0,
        },
    })
    published: boolean;
}