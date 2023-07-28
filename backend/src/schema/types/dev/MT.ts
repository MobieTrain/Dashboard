import { GraphQLBoolean, GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
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
        eula_accepted_at: { type: DateType },
        deleted_at: { type: DateType },
    }
});

export const AccountMT = new GraphQLObjectType({
    name: 'AccountMT',
    fields: {
        id: { type: GraphQLID },
        slug: { type: GraphQLString },
    }
});

export const NumberOfUsersPerClient = new GraphQLObjectType({
    name: 'NumberOfUsersPerClient',
    fields: {
        count: { type: GraphQLInt },
    }
});

export const AccountsUsersId = new GraphQLObjectType({
    name: 'AccountsUsersId',
    fields: {
        account_id: { type: GraphQLInt },
        user_id: { type: GraphQLInt },
    }
});

export const LearningPathMT = new GraphQLObjectType({
    name: 'LearningPathMT',
    fields: {
        id: { type: GraphQLID },
        account_id: { type: GraphQLInt },
        slug: { type: GraphQLString },
        published: { type: GraphQLBoolean },
    }
});

export const CountResponse = new GraphQLObjectType({
    name: 'CountResponse',
    fields: {
        count: { type: GraphQLInt },
    }
});

export const publishedPaths = new GraphQLObjectType({
    name: 'PublishedPaths',
    fields: {
        total: { type: GraphQLInt },
        published: { type: GraphQLInt },
    }
});

export const ModuleMT = new GraphQLObjectType({
    name: 'ModuleMT',
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
    }
});