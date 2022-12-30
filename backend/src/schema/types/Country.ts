import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';


export const Country = new GraphQLObjectType({
    name: 'Country',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
    }
});