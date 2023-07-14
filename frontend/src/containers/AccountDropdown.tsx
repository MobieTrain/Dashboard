import { useQuery } from '@apollo/client';
import * as React from 'react';
import Select, { SingleValue } from 'react-select';
import { GET_ACCOUNTS } from '../queries/dev/accounts';

type AccountDropdown = {
    value?: AccountOption;
    onChange: (account: AccountOption) => void;
}

export type AccountOption = {
    value: string;
    label: string;
}

type Account = {
    id: string;
    slug: string;
}

export const AccountDropdown: React.FC<AccountDropdown> = ({ value, onChange }) => {

    const { loading, error, data } = useQuery(GET_ACCOUNTS);
    if (loading) return <>Loading</>;
    if (error) return <>Error!</>;

    const options = data?.getAccountsMT.map((account: Account) => {
        return {
            value: account.id,
            label: account.slug
        };
    });

    const handleOnChange = (account: SingleValue<AccountOption>) => {
        if (!account) {
            return;
        }
        onChange(account);
    };

    return <>
        <Select
            className='flex-col justify-center w-1/4 m-auto text-center'
            placeholder='Select account...'
            value={value}
            options={options}
            onChange={handleOnChange} />
    </>;

};
