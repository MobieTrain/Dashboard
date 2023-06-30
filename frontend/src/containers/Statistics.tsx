import { useLazyQuery } from '@apollo/client';
import * as React from 'react';
import { useState } from 'react';
import { GET_PUBLISHED_LEPAS } from '../queries/dev/lepa';
import { GET_REGISTERED_USERS_PER_CLIENT, GET_USERS_PER_CLIENT } from '../queries/dev/registeredUsers';
import { LepaStatistics } from './LepaStatistics';
import { Summary } from './Summary';
import { LepaStatisticsResult, StatisticsResult } from './types';

export const Statistics: React.FC = () => {

    const [accountId, setAccountId] = useState('');
    const [statistics, setStatistics] = useState<StatisticsResult>({ users: { totalUsers: 0, registeredUsers: 0 }, lepas: [] });

    // TODO: Handle errors and loading status
    const [getUsersPerClient] = useLazyQuery(GET_USERS_PER_CLIENT);
    const [getRegisteredUsers] = useLazyQuery(GET_REGISTERED_USERS_PER_CLIENT);
    const [getPublishedLepas] = useLazyQuery(GET_PUBLISHED_LEPAS);


    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Upps...There is an error. :( </p>;

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccountId(event.target.value);
    };

    const handleOnClick = () => {
        search();
    };

    const search = async () => {
        const result: StatisticsResult = {
            users: {
                registeredUsers: 0,
                totalUsers: 0,
            },
            lepas: []
        };

        await getRegisteredUsers({ variables: { accountId: parseInt(accountId, 10) } })
            .then(data => {
                const { data: response } = data;
                result.users.registeredUsers = response?.getRegisteredUsersPerClient.length;
            })
            .catch(error => console.log(error));
        await getUsersPerClient({ variables: { accountId: parseInt(accountId, 10) } })
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
        Account ID: <input type='number' value={accountId} onChange={handleOnChange} />
        <button onClick={handleOnClick}>Search</button>
        <Summary totalUsers={statistics.users.totalUsers} registeredUsers={statistics.users.registeredUsers} />
        <LepaStatistics data={statistics.lepas} />
    </>;
};