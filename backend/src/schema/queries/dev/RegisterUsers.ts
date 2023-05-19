import { GraphQLList } from 'graphql';
import { User } from '../../../entities/dev/User';
import { AccountsUsersId, UserMT } from '../../types/dev/MT';
import { AccountUser } from '../../../entities/dev/AccountUser';

export const GET_ACCOUNTS_USERS_ID = {
    type: new GraphQLList(AccountsUsersId),
    resolve: async () => {
        const result = await AccountUser.find();
        return result;
    }
};

export const GET_REGISTERED_USERS_PER_CLIENT = {
    // Client: 1 - Cloudoki
    type: new GraphQLList(UserMT),
    resolve: async () => {
        const result = await User.find();
        return result;
    }
};

export const GET_REGISTERED_USERS_PER_DAY = {
    type: new GraphQLList(UserMT),
    resolve: async () => {
        const result = await User.find();
        return result;
    }
};

// export const TEST = {
//     type: new GraphQLList(Account),
//     resolve: async () => {
//         const accountID = 1;
//         const accounts = await AccountUser.find({
//             where: {
//                 account_id: accountID,
//             },
//         });
//         const users = await User.find();

//         // const users = await User.findBy({
//         //     eula_accepted_at: Not(IsNull())
//         // });
//         // return users;
//     }
// };
