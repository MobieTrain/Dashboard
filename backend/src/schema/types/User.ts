import { GraphQLBoolean, GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';


export const User = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        lastName: { type: GraphQLString },
        country: {type: GraphQLString},
        role: {type: GraphQLString},
        isInvited: {type: GraphQLBoolean},
        isRegistered: {type: GraphQLBoolean}
    }
});