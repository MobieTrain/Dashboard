import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ModuleProgress extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('tinyint', {
        width: 1,
        default: 0,
        transformer: {
          to: (value: boolean) => (value ? 1 : 0),
          from: (value: number) => value !== 0,
        },
    })
    passed: boolean;

    @Column()
    module_id: number;

    @Column()
    user_id: number;

    @Column()
    done_at: Date;
}