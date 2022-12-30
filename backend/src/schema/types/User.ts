import { GraphQLBoolean, GraphQLFloat, GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';


export const User = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        lastName: { type: GraphQLString },
        country: { type: GraphQLString },
        role: { type: GraphQLString },
        isInvited: { type: GraphQLBoolean },
        isRegistered: { type: GraphQLBoolean }
    }
});

export const UserRegistrationStatistics = new GraphQLObjectType({
    name: 'UserRegistrationStatistics',
    fields: {
        average: { type: GraphQLFloat },
        totalInvitations: { type: GraphQLInt },
        totalRegisteredUsers: { type: GraphQLInt },
    }
});

export const UsersByCountry = new GraphQLObjectType({
    name: 'UsersByCountry',
    fields: {
        country: { type: GraphQLString },
        totalCount: { type: GraphQLInt },
        percentage: { type: GraphQLFloat },

    }
});

export const UsersByRole = new GraphQLObjectType({
    name: 'UsersByRole',
    fields: {
        role: { type: GraphQLString },
        totalCount: { type: GraphQLInt },
        percentage: { type: GraphQLFloat },
    }
});

export type getUsersByCountrySuccessPayload = {
    country: string;
    totalCount: number;
    percentage: number;
}

export type getTUsersByRoleSuccessPayload = {
    role: string;
    totalCount: number;
    percentage: number;
}