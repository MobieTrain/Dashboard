import { useQuery } from '@apollo/client';
import * as React from 'react';
import Select from 'react-select';
import { GET_ACCOUNTS } from '../queries/dev/accounts';

type AccountDropdown = {
    value: any;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AccountDropdown: React.FC<AccountDropdown> = ({ value, onChange }) => {

    const { loading, error, data } = useQuery(GET_ACCOUNTS);
    if (loading) return <>Loading</>;
    if (error) return <>Error!</>;

    const options = data?.getAccountsMT.map((account: any) => {
        return {
            value: account.id,
            label: account.slug
        };
    });

    const handleOnChange = (event: any) => {
        onChange(event);
    };

    return <>
        <Select className='flex-col justify-center w-1/4 m-auto text-center' placeholder='Select account...' value={value} options={options} onChange={handleOnChange} />
    </>;

};
