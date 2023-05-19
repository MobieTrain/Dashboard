import { GraphQLList } from 'graphql';
import { User } from '../../../entities/dev/User';
import { UserMT } from '../../types/dev/MT';

export const GET_USERS_MT = {
    type: new GraphQLList(UserMT),
    resolve: async () => {
        const result = await User.find();
        return result;
    }
};