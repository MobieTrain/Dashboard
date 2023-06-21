import { useLazyQuery } from '@apollo/client';
import * as React from 'react';
import { useState } from 'react';
import { GET_REGISTERED_USERS_PER_CLIENT, GET_USERS_PER_CLIENT } from '../queries/dev/registeredUsers';
import { UserStatistics } from './UserStatistics';
import { GET_PUBLISHED_LEPAS } from '../queries/dev/lepa';
import { LepaStatistics } from './LepaStatistics';

export const Statistics: React.FC<any> = () => {

    const [accountId, setAccountId] = useState('');
    const [statistics, setStatistics] = useState<any>({});

    const [getUsersPerClient] = useLazyQuery(GET_USERS_PER_CLIENT);
    const [getRegisteredUsers, { loading, error }] = useLazyQuery(GET_REGISTERED_USERS_PER_CLIENT);
    const [getPublishedLepas] = useLazyQuery(GET_PUBLISHED_LEPAS);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Upps...There is an error. :( </p>;

    const handleOnChange = (event: any) => {
        setAccountId(event.target.value);
    };

    const handleOnClick = () => {
        search();
    };

    const search = async () => {
        console.log(accountId);
        alert(`Search: ${accountId}`);

        const response: any = {};

        await getRegisteredUsers({ variables: { accountId: parseInt(accountId, 10) } })
            .then(data => {
                const x = data.data as any;
                response.registered = x?.getRegisteredUsersPerClient.length;
            })
            .catch(error => console.log(error));
        await getUsersPerClient({ variables: { accountId: parseInt(accountId, 10) } })
            .then(data => {
                const x = data.data as any;
                response.total = x?.getUsersPerClient.count;
            })
            .catch(error => console.log(error));

        await lepaStatistics(response);

        setStatistics(response);
    };

    const countLepaByAccountId = (lepas: any) => {
        const lepaByAccountId = lepas.reduce((acc: any, curr: any) => {
            if (acc[curr.account_id]) {
                acc[curr.account_id].total += 1;
            } else {
                acc.push({ id: curr.account_id, total: 1 });
            }
            return acc;
        }, []);
        return lepaByAccountId;
    };

    const lepaStatistics = async (response: any) => {
        await getPublishedLepas()
            .then(data => {
                const x = data.data as any;
                const test = x?.getPublishedLearningPathsMT;
                const y = countLepaByAccountId(test);
                console.log(y);
                response.lepa = y;
            })
            .catch(error => console.log(error));
    };

    return <>
        Account ID: <input type='number' value={accountId} onChange={handleOnChange} />
        <button onClick={handleOnClick}>Search</button>
        <UserStatistics data={statistics} />
        <LepaStatistics data={statistics.lepa} />
    </>;
};