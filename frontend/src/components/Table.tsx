import * as React from 'react';
import { DocumentNode, useQuery } from '@apollo/client';
import { useState } from 'react';
import { UserMT } from '../queries/types';

type Checkbox = {
    onClick: () => void;
}

const Checkbox: React.FC<Checkbox> = ({ onClick }) => {
    return (
        <div className="flex items-center justify-center mb-6">
            <input id="checked-checkbox" type="checkbox" value="" onClick={onClick}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Show data table</label>
        </div>
    );
};

type Table = {
    query: DocumentNode;
}

export const Table: React.FC<Table> = ({ query }) => {
    const { loading, error, data } = useQuery(query);
    const [isTableShown, setIsTableShown] = useState(false);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Upps...There is an error. :( </p>;
    const users = data?.getUsers || data?.getUsersMT;

    const handleShowTable = () => {
        setIsTableShown(!isTableShown);
    };

    return (
        <>
            <Checkbox onClick={handleShowTable}></Checkbox>
            {isTableShown &&
                <div className='flex justify-center mb-6'>
                    <table className="w-11/12 border border-separate table-fixed border-slate-400">
                        <thead>
                            <tr>
                                <th className='border border-slate-300'>id</th>
                                <th className='border border-slate-300'>email</th>
                                <th className='border border-slate-300'>first_name</th>
                                <th className='border border-slate-300'>last_name</th>
                                <th className='border border-slate-300'>job_position</th>
                                <th className='border border-slate-300'>role_id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user: UserMT) => {
                                return (
                                    <tr key={user.id}>
                                        <td className='border border-slate-300'>{user.id}</td>
                                        <td className='border border-slate-300'>{user.email}</td>
                                        <td className='border border-slate-300'>{user.first_name}</td>
                                        <td className='border border-slate-300'>{user.last_name}</td>
                                        <td className='border border-slate-300'>{user.job_position}</td>
                                        <td className='border border-slate-300'>{user.role_id}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>}
        </>
    );
};


