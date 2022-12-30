import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { root } from './root';
import { schema2 } from './schema/index';

export const app = express();

app.use(cors());
app.use(
    '/graphql',
    graphqlHTTP({
        graphiql: true,
        rootValue: root,
        schema: schema2,
    })
);