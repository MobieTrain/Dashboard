import { GraphQLInt, GraphQLList } from 'graphql';
import { LearningPath } from '../../../entities/dev/LearningPath';
import { LearningPathMT, publishedPaths } from '../../types/dev/MT';
import { appDataSource } from '../../../db';

export const GET_LEARNING_PATHS = {
    type: new GraphQLList(LearningPathMT),
    resolve: async () => {
        const result = await LearningPath.find();
        return result;
    }
};

export const GET_PUBLISHED_LEARNING_PATHS = {
    type: new GraphQLList(LearningPathMT),
    resolve: async () => {
        const result = await LearningPath.findBy({ published: true });
        return result;
    }
};

export const GET_NUMBER_OF_PUBLISHED_LEARNING_PATHS_PER_CLIENT = {
    type: publishedPaths,
    args: {
        accountId: { type: GraphQLInt },
    },
    resolve: async (_: unknown, args: { accountId: number }) => {
        const { accountId } = args;
        const total = await appDataSource
            .getRepository(LearningPath)
            .createQueryBuilder('lepa')
            .where('lepa.account_id = :accountId', { accountId })
            .getCount();
        const published = await appDataSource
            .getRepository(LearningPath)
            .createQueryBuilder('lepa')
            .where('lepa.account_id = :accountId', { accountId })
            .andWhere('lepa.published = 1')
            .getCount();
        return { total, published };
    }
};