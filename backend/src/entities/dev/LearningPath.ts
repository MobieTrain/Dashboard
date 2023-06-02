import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Level } from './Level';

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

    @OneToMany(() => Level, (level) => level.learningPath)
    levels?: Level[];
}