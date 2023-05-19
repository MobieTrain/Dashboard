

import { GraphQLScalarType } from 'graphql';

export const DateType = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value) {
        if (!(value instanceof Date)) {
            throw new Error(`Invalid date value: ${value}`);
        }
        return value.toISOString();
    },
    parseValue(value) {
        if (typeof value !== 'string') {
            throw new Error(`Invalid date value: ${value}`);
        }
        return new Date(value);
    },
});
