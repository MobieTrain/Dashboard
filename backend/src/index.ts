import { PORT } from '../config';
import { app } from './app';
import { appDataSource } from './db';

try {
    appDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Data Source initialization', err);
    });
    app.listen(PORT);
    console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);
} catch (error) {
    console.log(error);
}


