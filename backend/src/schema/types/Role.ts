import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';


export const Role = new GraphQLObjectType({
    name: 'Role',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
    }
});