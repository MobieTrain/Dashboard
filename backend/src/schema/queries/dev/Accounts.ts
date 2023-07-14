import { GraphQLList } from 'graphql';
import { AccountMT } from '../../types/dev/MT';
import { Account } from '../../../entities/dev/Account';
import { appDataSource } from '../../../db';

export const GET_ACCOUNTS = {
    type: new GraphQLList(AccountMT),
    resolve: async () => {
        const result = await appDataSource
            .getRepository(Account)
            .createQueryBuilder('account')
            .where('account.slug not like :deleted', { deleted: '%deleted%' })
            .orderBy('account.id', 'ASC')
            .getMany();
        return result;
    }
};