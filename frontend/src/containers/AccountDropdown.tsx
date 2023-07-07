import { useQuery } from '@apollo/client';
import * as React from 'react';
import Select from 'react-select';
import { GET_ACCOUNTS } from '../queries/dev/accounts';

export const AccountDropdown = () => {

    const { loading, error, data } = useQuery(GET_ACCOUNTS);
    if (loading) return <>Loading</>;
    if (error) return <>Error!</>;

    const options = data?.getAccountsMT.map((account: any) => {
        return {
            value: account.id,
            label: account.slug
        };
    });
    return (<Select options={options} />);

};
