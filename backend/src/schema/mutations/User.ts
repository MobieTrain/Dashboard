import { GraphQLString } from 'graphql';
import { Users } from '../../entities/Users';
import { User } from '../types/User';

export const CREATE_USER = {
    type: User,
    args: {
        name: {type: GraphQLString},
        lastName: {type: GraphQLString},
        country: {type: GraphQLString},
        role: {type: GraphQLString}
    },
    resolve: async (_: any, args: any) => {
        const { name, lastName, country, role } = args;

        const result = await Users.insert({
            name,
            lastName,
            country,
            role
        });
        return {
            id: result.identifiers[0].id,
            name,
            lastName,
            country,
            role,
            isInvited: result.identifiers[0].isInvited,
            isRegistered: result.identifiers[0].isRegistered
        };
    }
};