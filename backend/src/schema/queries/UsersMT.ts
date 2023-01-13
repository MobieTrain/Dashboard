import { GraphQLList } from 'graphql';
import { User } from '../../entities/UsersMT';
import { UserMT } from '../types/User';

export const GET_USERS_MT = {
    type: new GraphQLList(UserMT),
    resolve: async () => {
        const result = await User.find();
        return result;
    }
};