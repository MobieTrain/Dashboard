import { BaseEntity, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class AccountUser extends BaseEntity {

    @PrimaryColumn({ unsigned: true })
    account_id: number;

    @PrimaryColumn({ unsigned: true })
    user_id: number;
}