import { useLazyQuery } from '@apollo/client';
import * as React from 'react';
import { useState } from 'react';
import { GET_REGISTERED_USERS_PER_CLIENT } from '../queries/dev/registeredUsers';
import { Account } from './Account';
import { UserStatistics } from './UserStatistics';

export const Statistics: React.FC<any> = () => {

    const [accountId, setAccountId] = useState('');

    const [getRegisteredUsers, { loading, error, data }] = useLazyQuery(GET_REGISTERED_USERS_PER_CLIENT);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Upps...There is an error. :( </p>;

    const search = async () => {
        console.log(accountId);
        alert(`Search: ${accountId}`);

        await getRegisteredUsers({ variables: { accountId: parseInt(accountId, 10) } }).then(data => console.log(data)).catch(error => console.log(error));
        console.log(data);
    };

    return <>
        <Account search={search} setAccountId={setAccountId} accountId={accountId} />
        <UserStatistics data={data?.getRegisteredUsersPerClient.length} />

    </>;
};