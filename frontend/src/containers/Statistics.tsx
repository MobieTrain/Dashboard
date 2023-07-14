import { useLazyQuery } from '@apollo/client';
import * as React from 'react';
import { useState } from 'react';
import { GET_PUBLISHED_LEPAS } from '../queries/dev/lepa';
import { GET_ACTIVE_USERS_PER_CLIENT, GET_REGISTERED_USERS_PER_CLIENT, GET_USERS_PER_CLIENT } from '../queries/dev/users';
import { LepaStatistics } from './LepaStatistics';
import { Summary } from './Summary';
import { LepaStatisticsResult, StatisticsResult } from './types';
import { AccountDropdown, AccountOption } from './AccountDropdown';

export const Statistics: React.FC = () => {

    const [account, setAccount] = useState<AccountOption>();
    const [statistics, setStatistics] = useState<StatisticsResult>({ users: { activeUsers: 0, totalUsers: 0, registeredUsers: 0 }, lepas: [] });

    // TODO: Handle errors and loading status
    const [getUsersPerClient] = useLazyQuery(GET_USERS_PER_CLIENT);
    const [getRegisteredUsers] = useLazyQuery(GET_REGISTERED_USERS_PER_CLIENT);
    const [getActiveUsers] = useLazyQuery(GET_ACTIVE_USERS_PER_CLIENT);
    const [getPublishedLepas] = useLazyQuery(GET_PUBLISHED_LEPAS);

    const handleOnChange = (account: AccountOption) => {
        setAccount(account);
        search(account);
    };

    const search = async (account: AccountOption) => {
        if (!account?.value) {
            return;
        }

        const result: StatisticsResult = {
            users: {
                activeUsers: 0,
                registeredUsers: 0,
                totalUsers: 0,
            },
            lepas: []
        };

        const accountId = parseInt(account.value, 10);

        await getRegisteredUsers({ variables: { accountId } })
            .then(data => {
                const { data: response } = data;
                result.users.registeredUsers = response?.getRegisteredUsersPerClient.length;
            })
            .catch(error => console.log(error));
        await getActiveUsers({ variables: { accountId } })
            .then(data => {
                const { data: response } = data;
                result.users.activeUsers = response?.getActiveUsersByAccountCount.count;
            })
            .catch(error => console.log(error));
        await getUsersPerClient({ variables: { accountId } })
            .then(data => {
                const { data: response } = data;
                result.users.totalUsers = response?.getUsersPerClient.count;
            })
            .catch(error => console.log(error));

        await lepaStatistics(result);

        setStatistics(result);
    };

    // TODO: Check how we can improve the statistics shown

    const countLepaByAccountId = (lepas: any) => {
        const lepaByAccountId = lepas.reduce((acc: LepaStatisticsResult[], curr: any) => {
            if (acc[curr.account_id]) {
                acc[curr.account_id].total += 1;
            } else {
                acc.push({ id: curr.account_id, total: 1 });
            }
            return acc;
        }, []);
        return lepaByAccountId;
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

    return <>
        <AccountDropdown value={account} onChange={handleOnChange} />
        <Summary totalUsers={statistics.users.totalUsers} registeredUsers={statistics.users.registeredUsers} activeUsers={statistics.users.activeUsers} />
        <LepaStatistics data={statistics.lepas} />
    </>;
};