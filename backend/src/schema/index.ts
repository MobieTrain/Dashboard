import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { CREATE_USER } from './mutations/User';
import { GET_USERS, GET_USERS_BY_COUNTRY, GET_USERS_BY_ROLE, GET_USER_REGISTRATION_STATISTICS } from './queries/User';
import { GET_REGISTERED_USERS_PER_CLIENT, GET_REGISTERED_USERS_PER_CLIENT_PER_DAY, GET_USERS_PER_CLIENT } from './queries/dev/RegisteredUsers';
import { GET_USERS_MT } from './queries/dev/Users';
import { GET_LEARNING_PATHS, GET_NUMBER_OF_PUBLISHED_LEARNING_PATHS, GET_PUBLISHED_LEARNING_PATHS } from './queries/dev/LearningPaths';
import { GET_NUMBER_OF_PUBLISHED_LEARNING_MOMENTS, GET_PUBLISHED_LEARNING_MOMENTS, GET_PUBLISHED_LEARNING_MOMENTS_WITH_FULL_TITLES } from './queries/dev/LearningMoments';
import { GET_ACTIVE_USERS_BY_ACCOUNT, GET_ACTIVE_USERS_BY_ACCOUNT_AND_DAY, GET_ACTIVE_USERS_BY_ACCOUNT_AND_DAY_COUNT, GET_ACTIVE_USERS_BY_ACCOUNT_COUNT, GET_ACTIVE_USERS_BY_DAY, GET_ACTIVE_USERS_BY_DAY_COUNT } from './queries/dev/ActiveUsers';
import { GET_ACCOUNTS } from './queries/dev/Accounts';

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        getUsers: GET_USERS,
        getUserRegistrationStatistics: GET_USER_REGISTRATION_STATISTICS,
        getUsersByCountry: GET_USERS_BY_COUNTRY,
        getUsersByRole: GET_USERS_BY_ROLE,
        // MT
        getUsersMT: GET_USERS_MT,
        getAccountsMT: GET_ACCOUNTS,
        // Metric 1.1
        getUsersPerClient: GET_USERS_PER_CLIENT,
        getRegisteredUsersPerClient: GET_REGISTERED_USERS_PER_CLIENT,
        getRegisteredUsersPerClientPerDay: GET_REGISTERED_USERS_PER_CLIENT_PER_DAY,
        // Metric 1.2
        getActiveUsersByAccount: GET_ACTIVE_USERS_BY_ACCOUNT,
        getActiveUsersByAccountCount: GET_ACTIVE_USERS_BY_ACCOUNT_COUNT,
        getActiveUsersByDay: GET_ACTIVE_USERS_BY_DAY,
        getActiveUsersByDayCount: GET_ACTIVE_USERS_BY_DAY_COUNT,
        getActiveUsersByAccountAndDay: GET_ACTIVE_USERS_BY_ACCOUNT_AND_DAY,
        getActiveUsersByAccountAndDayCount: GET_ACTIVE_USERS_BY_ACCOUNT_AND_DAY_COUNT,
        // Metric 1.3
        getLearningPathsMT: GET_LEARNING_PATHS,
        getPublishedLearningPathsMT: GET_PUBLISHED_LEARNING_PATHS,
        getNumberOfPublishedLearningPathsMT: GET_NUMBER_OF_PUBLISHED_LEARNING_PATHS,
        // Metric 1.4
        getPublishedLearningMomentsMT: GET_PUBLISHED_LEARNING_MOMENTS,
        getPublishedLearningMomentsWithFullTitlesMT: GET_PUBLISHED_LEARNING_MOMENTS_WITH_FULL_TITLES,
        getNumberOfPublishedLearningMoments: GET_NUMBER_OF_PUBLISHED_LEARNING_MOMENTS,
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