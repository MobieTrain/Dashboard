import { GraphQLInt, GraphQLList, GraphQLString } from 'graphql';
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
    type: new GraphQLList(UserMT),
    args: {
        accountId: { type: GraphQLInt },
    },
    resolve: async (_: unknown, args: { accountId: number }) => {
        const { accountId } = args;
        const result = await appDataSource
            .getRepository(User)
            .createQueryBuilder('user')
            .innerJoin('account_user', 'account_user', 'user.id = account_user.user_id')
            .where('account_user.account_id = :id', { id: accountId })
            .andWhere('user.eula_accepted_at IS NOT NULL')
            .andWhere('user.last_name != "Deleted"')
            .getMany();
        return result;
    }
};

export const GET_REGISTERED_USERS_PER_CLIENT_PER_DAY = {
    type: new GraphQLList(UserMT),
    args: {
        accountId: { type: GraphQLInt },
        date: { type: GraphQLString }
    },
    resolve: async (_: unknown, args: { accountId: number, date: string }) => {
        const { accountId, date } = args;
        const result = await appDataSource
            .getRepository(User)
            .createQueryBuilder('user')
            .innerJoin('account_user', 'account_user', 'user.id = account_user.user_id')
            .where('account_user.account_id = :id', { id: accountId })
            .andWhere('user.eula_accepted_at > :date', { date })
            .andWhere('user.last_name != "Deleted"')
            .getMany();
        return result;
    }

};