import cors from 'cors';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema/index';

export const app = express();

app.use(cors());
app.use(
    '/graphql',
    graphqlHTTP({
        graphiql: true,
        schema: schema,
    })
);