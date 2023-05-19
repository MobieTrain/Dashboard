import { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import { DateType } from '../ScalarTypes';

export const UserMT = new GraphQLObjectType({
    name: 'UserMT',
    fields: {
        id: { type: GraphQLID },
        email: { type: GraphQLString },
        username: { type: GraphQLString },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        last_me: { type: DateType },
        eula_accepted_at: { type: DateType }
    }
});

export const AccountsUsersId = new GraphQLObjectType({
    name: 'AccountsUsersId',
    fields: {
        account_id: { type: GraphQLInt },
        user_id: { type: GraphQLInt },
    }
});