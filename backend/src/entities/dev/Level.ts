import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LearningPath } from './LearningPath';

@Entity()
export class Level extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    learning_path_id: number;

    @Column()
    title: string;

    @ManyToOne(() => LearningPath, (learningPath) => learningPath.levels, {
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
    })
    @JoinColumn([{ referencedColumnName: 'id' }])
    learningPath?: LearningPath;
}