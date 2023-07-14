import { useLazyQuery } from '@apollo/client';
import * as React from 'react';
import { useState } from 'react';
import { GET_PUBLISHED_LEPAS, GET_PUBLISHED_LEPAS_PER_CLIENT } from '../queries/dev/lepa';
import { GET_ACTIVE_USERS_PER_CLIENT, GET_REGISTERED_USERS_PER_CLIENT, GET_USERS_PER_CLIENT } from '../queries/dev/users';
import { LepaStatistics } from './LepaStatistics';
import { Summary } from './Summary';
import { LepaStatisticsResult, PublishedLepas, StatisticsResult, UserStatisticsResult } from './types';
import { AccountDropdown, AccountOption } from './AccountDropdown';

export const Statistics: React.FC = () => {

    const [account, setAccount] = useState<AccountOption>();
    const [statistics, setStatistics] = useState<StatisticsResult>(
        {
            users: { activeUsers: 0, totalUsers: 0, registeredUsers: 0 },
            lepas: [],
            publishedPerClient: { total: 0, published: 0 }
        });

    // TODO: Handle errors and loading status
    const [getUsersPerClient] = useLazyQuery(GET_USERS_PER_CLIENT);
    const [getRegisteredUsers] = useLazyQuery(GET_REGISTERED_USERS_PER_CLIENT);
    const [getActiveUsers] = useLazyQuery(GET_ACTIVE_USERS_PER_CLIENT);
    const [getPublishedLepas] = useLazyQuery(GET_PUBLISHED_LEPAS);
    const [getPublishedLepasPerClient] = useLazyQuery(GET_PUBLISHED_LEPAS_PER_CLIENT);

    React.useEffect(() => {
        const getLepaStatistics = async () => {
            const newStatistics = { ...statistics };
            await lepaStatistics(newStatistics);
            setStatistics(newStatistics);
        };

        getLepaStatistics();
    }, []);

    const handleOnChange = (account: AccountOption) => {
        setAccount(account);
        search(account);
    };

    const search = async (account: AccountOption) => {
        if (!account?.value) {
            return;
        }

        const usersResult: UserStatisticsResult = {
            activeUsers: 0,
            registeredUsers: 0,
            totalUsers: 0,
        };

        const accountId = parseInt(account.value, 10);

        await getRegisteredUsers({ variables: { accountId } })
            .then(data => {
                const { data: response } = data;
                usersResult.registeredUsers = response?.getRegisteredUsersPerClient.length;
            })
            .catch(error => console.log(error));
        await getActiveUsers({ variables: { accountId } })
            .then(data => {
                const { data: response } = data;
                usersResult.activeUsers = response?.getActiveUsersByAccountCount.count;
            })
            .catch(error => console.log(error));
        await getUsersPerClient({ variables: { accountId } })
            .then(data => {
                const { data: response } = data;
                usersResult.totalUsers = response?.getUsersPerClient.count;
            })
            .catch(error => console.log(error));

        const { total, published } = await lepaPublishStatistics(accountId);

        setStatistics({
            ...statistics,
            users: usersResult,
            publishedPerClient: {
                total,
                published
            }
        });
    };

    // TODO: Check how we can improve the statistics shown
    const countLepaByAccountId = (lepas: any): LepaStatisticsResult[] => {
        const lepaByAccountIdMap = lepas.reduce((acc: any, curr: any) => {
            if (acc[curr.account_id]) {
                acc[curr.account_id] += 1;
            } else {
                acc[curr.account_id] = 1;
            }
            return acc;
        }, {});
        return Object.keys(lepaByAccountIdMap).map(accountId => ({
            id: Number(accountId),
            total: lepaByAccountIdMap[Number(accountId)]
        }));
    };

    const lepaStatistics = async (result: StatisticsResult) => {
        await getPublishedLepas()
            .then(data => {
                const { data: response } = data;
                const publishedLepas = response?.getPublishedLearningPathsMT;
                const totalLepaByAccountsId = countLepaByAccountId(publishedLepas);
                result.lepas = totalLepaByAccountsId;
            })
            .catch(error => console.log(error));
    };

    const lepaPublishStatistics = async (accountId: number) => {
        let result: PublishedLepas = {
            total: 0,
            published: 0
        };
        await getPublishedLepasPerClient({ variables: { accountId } })
            .then(data => {
                const { data: response } = data;
                const publishedLepas = response?.getPublishedLearningPathsPerClientMT;
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