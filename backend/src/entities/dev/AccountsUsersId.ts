import { BaseEntity, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class AccountsUsersId extends BaseEntity {

    @PrimaryColumn({ unsigned: true })
    account_id: number;

    @PrimaryColumn({ unsigned: true })
    user_id: number;
}