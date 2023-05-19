import { GraphQLList } from 'graphql';
import { Users } from '../../../entities/dev/Users';
import { UserMT as UserMT } from '../../types/dev/MT';

export const GET_USERS_MT = {
    type: new GraphQLList(UserMT),
    resolve: async () => {
        const result = await Users.find();
        return result;
    }
};

// export const GET_ACCOUNTS_USERS_ID = {
//     type: new GraphQLList(AccountsUsersId),
//     resolve: async () => {
//         const result = await AccountsUsersId.find();
//         return result;
//     }
// };