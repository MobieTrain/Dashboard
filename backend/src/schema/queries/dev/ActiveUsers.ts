import { GraphQLInt, GraphQLList, GraphQLString } from 'graphql';
import { CountResponse, UserMT } from '../../types/dev/MT';
import { appDataSource } from '../../../db';
import { User } from '../../../entities/dev/User';

export const GET_ACTIVE_USERS_BY_ACCOUNT = {
    type: new GraphQLList(UserMT),
    args: {
        accountId: { type: GraphQLInt },
    },
    resolve: async (_: unknown, args: { accountId: number }) => {
        const { accountId } = args;
        const result = await appDataSource
            .getRepository(User)
            .createQueryBuilder('u')
            .innerJoin('module_progress', 'mp', 'mp.user_id = u.id')
            .innerJoin('module', 'm', 'm.id = mp.module_id')
            .innerJoin('skill', 's', 's.id = m.skill_id')
            .innerJoin('level', 'l', 'l.id = s.level_id')
            .innerJoin('learning_path', 'lp', 'lp.id = l.learning_path_id')
            .where('u.deleted_at IS :deletedAt', { deletedAt: null })
            .andWhere('mp.passed = :passed', { passed: true })
            .andWhere('lp.published = :published', { published: true })
            .andWhere('lp.account_id = :accountId', { accountId })
            .getMany();

        return result;
    }
};

export const GET_ACTIVE_USERS_BY_ACCOUNT_COUNT = {
    type: CountResponse,
    args: {
        accountId: { type: GraphQLInt },
    },
    resolve: async (_: unknown, args: { accountId: number }) => {
        const { accountId } = args;
        const count = await appDataSource
            .getRepository(User)
            .createQueryBuilder('u')
            .innerJoin('module_progress', 'mp', 'mp.user_id = u.id')
            .innerJoin('module', 'm', 'm.id = mp.module_id')
            .innerJoin('skill', 's', 's.id = m.skill_id')
            .innerJoin('level', 'l', 'l.id = s.level_id')
            .innerJoin('learning_path', 'lp', 'lp.id = l.learning_path_id')
            .where('u.deleted_at IS :deletedAt', { deletedAt: null })
            .andWhere('mp.passed = :passed', { passed: true })
            .andWhere('lp.published = :published', { published: true })
            .andWhere('lp.account_id = :accountId', { accountId })
            .getCount();

        return { count };
    }
};

export const GET_ACTIVE_USERS_BY_DAY = {
    type: new GraphQLList(UserMT),
    args: {
        date: { type: GraphQLString }
    },
    resolve: async (_: unknown, args: { date: string }) => {
        const { date } = args;
        const from = new Date(date);
        const to = new Date(date);
        to.setDate(from.getDate() + 1);

        const result = await appDataSource
            .getRepository(User)
            .createQueryBuilder('u')
            .innerJoin('module_progress', 'mp', 'mp.user_id = u.id')
            .innerJoin('module', 'm', 'm.id = mp.module_id')
            .innerJoin('skill', 's', 's.id = m.skill_id')
            .innerJoin('level', 'l', 'l.id = s.level_id')
            .innerJoin('learning_path', 'lp', 'lp.id = l.learning_path_id')
            .where('mp.done_at >= :from', { from: from.toISOString() })
            .andWhere('mp.done_at < :to', { to: to.toISOString() })
            .andWhere('mp.passed = :passed', { passed: true })
            .andWhere('u.deleted_at IS :deletedAt', { deletedAt: null })
            .andWhere('lp.published = :published', { published: true })
            .getMany();

        return result;
    }
};

export const GET_ACTIVE_USERS_BY_DAY_COUNT = {
    type: CountResponse,
    args: {
        date: { type: GraphQLString }
    },
    resolve: async (_: unknown, args: { date: string }) => {
        const { date } = args;
        const from = new Date(date);
        const to = new Date(date);
        to.setDate(from.getDate() + 1);

        const count = await appDataSource
            .getRepository(User)
            .createQueryBuilder('u')
            .innerJoin('module_progress', 'mp', 'mp.user_id = u.id')
            .innerJoin('module', 'm', 'm.id = mp.module_id')
            .innerJoin('skill', 's', 's.id = m.skill_id')
            .innerJoin('level', 'l', 'l.id = s.level_id')
            .innerJoin('learning_path', 'lp', 'lp.id = l.learning_path_id')
            .where('mp.done_at >= :from', { from: from.toISOString() })
            .andWhere('mp.done_at < :to', { to: to.toISOString() })
            .andWhere('mp.passed = :passed', { passed: true })
            .andWhere('u.deleted_at IS :deletedAt', { deletedAt: null })
            .andWhere('lp.published = :published', { published: true })
            .getCount();

        return { count };
    }
};

export const GET_ACTIVE_USERS_BY_ACCOUNT_AND_DAY = {
    type: new GraphQLList(UserMT),
    args: {
        accountId: { type: GraphQLInt },
        date: { type: GraphQLString }
    },
    resolve: async (_: unknown, args: { accountId: number, date: string }) => {
        const { accountId, date } = args;
        const from = new Date(date);
        const to = new Date(date);
        to.setDate(from.getDate() + 1);

        const result = await appDataSource
            .getRepository(User)
            .createQueryBuilder('u')
            .innerJoin('module_progress', 'mp', 'mp.user_id = u.id')
            .innerJoin('module', 'm', 'm.id = mp.module_id')
            .innerJoin('skill', 's', 's.id = m.skill_id')
            .innerJoin('level', 'l', 'l.id = s.level_id')
            .innerJoin('learning_path', 'lp', 'lp.id = l.learning_path_id')
            .where('mp.done_at >= :from', { from: from.toISOString() })
            .andWhere('mp.done_at < :to', { to: to.toISOString() })
            .andWhere('mp.passed = :passed', { passed: true })
            .andWhere('u.deleted_at IS :deletedAt', { deletedAt: null })
            .andWhere('lp.published = :published', { published: true })
            .andWhere('lp.account_id = :accountId', { accountId })
            .getMany();

        return result;
    }
};

export const GET_ACTIVE_USERS_BY_ACCOUNT_AND_DAY_COUNT = {
    type: CountResponse,
    args: {
        accountId: { type: GraphQLInt },
        date: { type: GraphQLString }
    },
    resolve: async (_: unknown, args: { accountId: number, date: string }) => {
        const { accountId, date } = args;
        const from = new Date(date);
        const to = new Date(date);
        to.setDate(from.getDate() + 1);

        const count = await appDataSource
            .getRepository(User)
            .createQueryBuilder('u')
            .innerJoin('module_progress', 'mp', 'mp.user_id = u.id')
            .innerJoin('module', 'm', 'm.id = mp.module_id')
            .innerJoin('skill', 's', 's.id = m.skill_id')
            .innerJoin('level', 'l', 'l.id = s.level_id')
            .innerJoin('learning_path', 'lp', 'lp.id = l.learning_path_id')
            .where('mp.done_at >= :from', { from: from.toISOString() })
            .andWhere('mp.done_at < :to', { to: to.toISOString() })
            .andWhere('mp.passed = :passed', { passed: true })
            .andWhere('u.deleted_at IS :deletedAt', { deletedAt: null })
            .andWhere('lp.published = :published', { published: true })
            .andWhere('lp.account_id = :accountId', { accountId })
            .getCount();

        return { count };
    }
};