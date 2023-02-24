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

export const UserMT = new GraphQLObjectType({
    name: 'UserMT',
    fields: {
        id: { type: GraphQLID },
        email: { type: GraphQLString },
        username: { type: GraphQLString },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        job_position: { type: GraphQLString },
        role_id: { type: GraphQLInt }
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

export type GetUsersByCountrySuccessPayload = {
    country: string;
    totalCount: number;
    percentage: number;
}

export type GetTUsersByRoleSuccessPayload = {
    role: string;
    totalCount: number;
    percentage: number;
}

export type CreateUserPayload = {
    name: string;
    lastName: string;
    country: string;
    role: string;
}