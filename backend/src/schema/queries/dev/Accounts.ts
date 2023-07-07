import { GraphQLList } from 'graphql';
import { AccountMT } from '../../types/dev/MT';
import { Account } from '../../../entities/dev/Account';

export const GET_ACCOUNTS = {
    type: new GraphQLList(AccountMT),
    resolve: async () => {
        const result = await Account.find();
        return result;
    }
};