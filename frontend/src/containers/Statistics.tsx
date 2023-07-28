import { useLazyQuery, useQuery } from '@apollo/client';
import * as React from 'react';
import { useState } from 'react';
import { GET_PUBLISHED_LEPAS, GET_PUBLISHED_LEPAS_PER_CLIENT } from '../queries/dev/lepa';
import { GET_ACTIVE_USERS_PER_CLIENT, GET_REGISTERED_USERS_PER_CLIENT, GET_USERS_PER_CLIENT } from '../queries/dev/users';
import { LepaStatistics } from './LepaStatistics';
import { Summary } from './Summary';
import { Lepa, LepaStatisticsResult, PublishedLepas, StatisticsResult, UserStatisticsResult } from './types';
import { AccountDropdown, AccountOption } from './AccountDropdown';

const usersInitialState: UserStatisticsResult = {
    activeUsers: 0,
    registeredUsers: 0,
    totalUsers: 0,
};

const initialState = {
    users: usersInitialState,
    lepas: [],
    publishedPerClient: { total: 0, published: 0 }
};

export const Statistics: React.FC = () => {

    const [account, setAccount] = useState<AccountOption>();
    const [statistics, setStatistics] = useState<StatisticsResult>(initialState);

    // TODO: Handle errors and loading status
    const { data: allLepasInfo } = useQuery(GET_PUBLISHED_LEPAS);
    const [getUsersPerClient] = useLazyQuery(GET_USERS_PER_CLIENT);
    const [getRegisteredUsers] = useLazyQuery(GET_REGISTERED_USERS_PER_CLIENT);
    const [getActiveUsers] = useLazyQuery(GET_ACTIVE_USERS_PER_CLIENT);
    const [getPublishedLepasPerClient] = useLazyQuery(GET_PUBLISHED_LEPAS_PER_CLIENT);

    // TODO: Check how we can improve the statistics shown
    const computeLepaByAccountId = (lepas: Lepa[]): LepaStatisticsResult[] => {
        const lepaByAccountIdMap = lepas.reduce((acc: any, curr: Lepa) => {
            if (acc[curr.account_id]) {
                acc[curr.account_id] += 1;
            } else {
                acc[curr.account_id] = 1;
            }
            return acc;
        }, new Map());
        return Object.keys(lepaByAccountIdMap).map(accountId => ({
            id: Number(accountId),
            total: lepaByAccountIdMap[Number(accountId)]
        }));
    };

    if (allLepasInfo && statistics.lepas.length === 0) {
        const publishedLepas = allLepasInfo?.getPublishedLearningPathsMT;
        const totalLepaByAccountsId = computeLepaByAccountId(publishedLepas);
        setStatistics({ ...statistics, lepas: totalLepaByAccountsId });
    }

    const handleOnChange = (account: AccountOption) => {
        setAccount(account);
        getStatisticsPerClient(account);
    };

    const getStatisticsPerClient = async (account: AccountOption) => {
        if (!account?.value) {
            return;
        }

        const accountId = parseInt(account.value, 10);
        const users = await getUsersStatistics(accountId);
        const publishedPerClient = await getPublishedLepaPerClientStatistics(accountId);

        setStatistics({
            ...statistics,
            users,
            publishedPerClient
        });
    };

    const getUsersStatistics = async (accountId: number) => {
        const result: UserStatisticsResult = usersInitialState;
        const [registeredUsersData, activeUsersData, usersPerClientData] = await Promise.all([
            getRegisteredUsers({ variables: { accountId } }),
            getActiveUsers({ variables: { accountId } }),
            getUsersPerClient({ variables: { accountId } })
        ]);
        result.registeredUsers = registeredUsersData?.data?.getRegisteredUsersPerClient.length;
        result.activeUsers = activeUsersData?.data?.getActiveUsersByAccountCount.count;
        result.totalUsers = usersPerClientData?.data?.getUsersPerClient.count;
        return result;
    };

    const getPublishedLepaPerClientStatistics = async (accountId: number) => {
        let result: PublishedLepas = {
            total: 0,
            published: 0
        };
        await getPublishedLepasPerClient({ variables: { accountId } })
            .then(data => {
                const { data: response } = data;
                const publishedLepas = response?.getNumberPublishedLearningPathsPerClientMT;
                result = publishedLepas;
            })
            .catch(error => console.log(error));
        return result;
    };

    return <>
        <AccountDropdown value={account} onChange={handleOnChange} />
        <Summary totalUsers={statistics.users.totalUsers} registeredUsers={statistics.users.registeredUsers} activeUsers={statistics.users.activeUsers} />
        <LepaStatistics data={statistics} />
    </>;
};