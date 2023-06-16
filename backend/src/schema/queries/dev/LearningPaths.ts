import { GraphQLList } from 'graphql';
import { LearningPath } from '../../../entities/dev/LearningPath';
import { LearningPathMT, CountResponse } from '../../types/dev/MT';

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

export const GET_NUMBER_OF_PUBLISHED_LEARNING_PATHS = {
    type: CountResponse,
    resolve: async () => {
        const count = await LearningPath.countBy({ published: true });
        return { count };
    }
};