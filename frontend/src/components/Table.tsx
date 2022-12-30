import * as React from 'react';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { User } from '../queries/types';
import { GET_USERS } from '../queries/user';

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

export const Table = () => {
    const { loading, error, data } = useQuery(GET_USERS);
    const [isTableShown, setIsTableShown] = useState(false);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Upps...There is an error. :( </p>;
    const users = data?.getUsers;

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
                                <th className='border border-slate-300'>First Name</th>
                                <th className='border border-slate-300'>Last name</th>
                                <th className='border border-slate-300'>Country</th>
                                <th className='border border-slate-300'>Role</th>
                                <th className='border border-slate-300'>Invited</th>
                                <th className='border border-slate-300'>Registered</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user: User) => {
                                return (
                                    <tr key={user.id}>
                                        <td className='border border-slate-300'>{user.name}</td>
                                        <td className='border border-slate-300'>{user.lastName}</td>
                                        <td className='border border-slate-300'>{user.country}</td>
                                        <td className='border border-slate-300'>{user.role}</td>
                                        <td className='border border-slate-300'>{user.isInvited.toString()}</td>
                                        <td className='border border-slate-300'>{user.isRegistered.toString()}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>}
        </>
    );
};


