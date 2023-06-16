import { GraphQLList } from 'graphql';
import { CountResponse, ModuleMT } from '../../types/dev/MT';
import { appDataSource } from '../../../db';
import { Module } from '../../../entities/dev/Module';
import { Locale } from '../../../entities/dev/Locale';
import { Translation } from '../../../entities/dev/Translation';

export const GET_PUBLISHED_LEARNING_MOMENTS = {
    type: new GraphQLList(ModuleMT),
    resolve: async () => {
        const result = await appDataSource
            .getRepository(Module)
            .createQueryBuilder('m')
            .innerJoin('skill', 's', 's.id = m.skill_id')
            .innerJoin('level', 'l', 'l.id = s.level_id')
            .innerJoin('learning_path', 'lp', 'lp.id = l.learning_path_id')
            .where('published = :published', { published: true })
            .getMany();

        return result;
    }
};

export const GET_PUBLISHED_LEARNING_MOMENTS_WITH_FULL_TITLES = {
    type: new GraphQLList(ModuleMT),
    resolve: async () => {
        const result = await appDataSource
            .getRepository(Module)
            .createQueryBuilder('m')
            .innerJoin('skill', 's', 's.id = m.skill_id')
            .innerJoin('level', 'l', 'l.id = s.level_id')
            .innerJoin('learning_path', 'lp', 'lp.id = l.learning_path_id')
            .where('published = :published', { published: true })
            .limit(100) // should be fixed, probably joining with translation table instead of doing the queries below
            .getMany();

        const englishLocale = await appDataSource.getRepository(Locale).findOneBy({ slug: 'en-GB' });
        if (!englishLocale) {
            return [];
        }
        const { id: localeId } = englishLocale;

        const response = [];
        for (const module of result) {
            const moduleTitle = await appDataSource.getRepository(Translation).findOneBy({
                i18n_id: module.title,
                locale_id: localeId
            });
            response.push({
                id: module.id,
                title: moduleTitle?.content
            });
        }

        return response;
    }
};

export const GET_NUMBER_OF_PUBLISHED_LEARNING_MOMENTS = {
    type: CountResponse,
    resolve: async () => {
        const count = await appDataSource
            .getRepository(Module)
            .createQueryBuilder('m')
            .innerJoin('skill', 's', 's.id = m.skill_id')
            .innerJoin('level', 'l', 'l.id = s.level_id')
            .innerJoin('learning_path', 'lp', 'lp.id = l.learning_path_id')
            .where('published = :published', { published: true })
            .getCount();

        return { count };
    }
};