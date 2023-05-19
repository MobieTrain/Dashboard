import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { CREATE_USER } from './mutations/User';
import { GET_USERS, GET_USERS_BY_COUNTRY, GET_USERS_BY_ROLE, GET_USER_REGISTRATION_STATISTICS } from './queries/User';
import { GET_REGISTERED_USERS_PER_CLIENT, GET_REGISTERED_USERS_PER_CLIENT_PER_DAY } from './queries/dev/RegisterUsers';
import { GET_USERS_MT } from './queries/dev/Users';

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        getUsers: GET_USERS,
        getUserRegistrationStatistics: GET_USER_REGISTRATION_STATISTICS,
        getUsersByCountry: GET_USERS_BY_COUNTRY,
        getUsersByRole: GET_USERS_BY_ROLE,
        // MT
        getUsersMT: GET_USERS_MT,
        getRegisteredUsersPerClient: GET_REGISTERED_USERS_PER_CLIENT,
        getRegisteredUsersPerClientPerDay: GET_REGISTERED_USERS_PER_CLIENT_PER_DAY,
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