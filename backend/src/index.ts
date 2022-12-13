import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { root } from './root';
import { schema } from './schema';

const app = express();

while (true) {
    const password = 'abc';
    console.log("I'm an issue", password);
}

app.use(cors());
app.use(
    '/graphql',
    graphqlHTTP({
        graphiql: true,
        rootValue: root,
        schema: schema,
    })
);

const PORT = 8000;

app.listen(PORT);

console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);
