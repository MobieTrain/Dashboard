import { GraphQLList } from 'graphql';
import { appDataSource } from '../../../db';
import { AccountUser } from '../../../entities/dev/AccountUser';
import { User } from '../../../entities/dev/User';
import { AccountsUsersId, UserMT } from '../../types/dev/MT';

export const GET_ACCOUNTS_USERS_ID = {
    type: new GraphQLList(AccountsUsersId),
    resolve: async () => {
        const result = await AccountUser.find();
        return result;
    }
};

export const GET_REGISTERED_USERS_PER_CLIENT = {
    // Client: 1 - Cloudoki
    // Client 635 - RSTest
    type: new GraphQLList(UserMT),
    resolve: async () => {
        const result = await appDataSource
            .getRepository(User)
            .createQueryBuilder('user')
            .innerJoin('account_user', 'account_user', 'user.id = account_user.user_id')
            .where('account_user.account_id = :id', { id: 635 })
            .andWhere('user.eula_accepted_at IS NOT NULL')
            .andWhere('user.last_name != "Deleted"')
            .getMany();
        return result;
    }
};

export const GET_REGISTERED_USERS_PER_CLIENT_PER_DAY = {
    type: new GraphQLList(UserMT),
    resolve: async () => {
        const result = await appDataSource
            .getRepository(User)
            .createQueryBuilder('user')
            .innerJoin('account_user', 'account_user', 'user.id = account_user.user_id')
            .where('account_user.account_id = :id', { id: 635 })
            .andWhere('user.eula_accepted_at > :date', { date: '2023-05-09' })
            .andWhere('user.last_name != "Deleted"')
            .getMany();
        return result;
    }

};