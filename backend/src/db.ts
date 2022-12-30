import { DataSource } from 'typeorm';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT } from '../config';
import { Users } from './entities/Users';

export const appDataSource = new DataSource({
    type: 'mysql',
    username: DB_NAME,
    port: Number(DB_PORT),
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASSWORD,
    ssl: false,
    entities: [Users],
    synchronize: false,
});
