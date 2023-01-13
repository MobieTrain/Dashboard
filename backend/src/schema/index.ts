import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { CREATE_USER } from './mutations/User';
import { GET_USERS, GET_USER_REGISTRATION_STATISTICS, GET_USERS_BY_COUNTRY, GET_USERS_BY_ROLE } from './queries/User';
import { GET_USERS_MT } from './queries/UsersMT';

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        getUsers: GET_USERS,
        getUserRegistrationStatistics: GET_USER_REGISTRATION_STATISTICS,
        getUsersByCountry: GET_USERS_BY_COUNTRY,
        getUsersByRole: GET_USERS_BY_ROLE,
        getUsersMT: GET_USERS_MT,
    }
});

const RootMutation = new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
        createUser: CREATE_USER
    }
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});