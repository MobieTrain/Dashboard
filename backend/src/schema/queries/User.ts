import { GraphQLList } from 'graphql';
import { Users } from '../../entities/Users';
import { User } from '../types/User';


export const GET_ALL_USERS = {
    type: new GraphQLList(User),
    resolve: async () => {

        const result = await Users.find();
        return result;
    }
};
