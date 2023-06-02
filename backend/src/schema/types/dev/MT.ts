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

export const LearningPathMT = new GraphQLObjectType({
    name: 'LearningPathMT',
    fields: {
        id: { type: GraphQLID },
        account_id: { type: GraphQLInt },
        slug: { type: GraphQLString },
        published: { type: GraphQLBoolean },
    }
});

export const NumberOfPublishedLearningPaths = new GraphQLObjectType({
    name: 'NumberOfPublishedLearningPaths',
    fields: {
        count: { type: GraphQLInt },
    }
});

export const ModuleMT = new GraphQLObjectType({
    name: 'ModuleMT',
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
    }
});

export const NumberOfPublishedLearningMoments = new GraphQLObjectType({
    name: 'NumberOfPublishedLearningMoments',
    fields: {
        count: { type: GraphQLInt },
    }
});