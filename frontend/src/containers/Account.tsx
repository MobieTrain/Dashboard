import * as React from 'react';

type Account = {
    setAccountId: (e: any) => void;
    search: () => void;
    accountId: string;
}

export const Account: React.FC<Account> = ({ search, setAccountId, accountId }) => {

    const handleOnChange = (event: any) => {
        setAccountId(event.target.value);
    };

    const handleOnClick = () => {
        search();
    };

    return (<>
        Account ID: <input type='number' value={accountId} onChange={handleOnChange} />
        <button onClick={handleOnClick}>Search</button>
    </>);
};