import * as React from 'react';
import { UserStatisticsResult } from './types';

type SummaryItem = {
    numberText: string;
    text: string;
    style: string;
}

const SummaryItem: React.FC<SummaryItem> = ({ numberText, text, style }) => {
    const finalStyles = `flex flex-col items-center justify-center border-double rounded-lg ${style}`;
    return (
        <div className={finalStyles}>
            <p className='text-4xl font-bold'>{numberText}</p>
            <p className='text-center'>{text}</p>
        </div>
    );
};

export const Summary: React.FC<UserStatisticsResult> = ({ totalUsers, registeredUsers }) => {

    const averageRegisteredUsers = (registeredUsers * 100 / totalUsers).toFixed(2);

    return (
        <div className='grid h-64 grid-cols-4 gap-6 m-10'>
            <SummaryItem numberText={totalUsers.toString()} text='Invited users' style='border-8 border-mt-orange' />
            <SummaryItem numberText={`${averageRegisteredUsers} %`} text='Registered out of invited ' style='row-span-2 bg-emerald-300' />
            <SummaryItem numberText={registeredUsers.toString()} text='Active users' style='col-span-2 row-span-2 border-8 border-mt-orange' />
            <SummaryItem numberText={registeredUsers.toString()} text='Registered users' style='"text-white bg-mt-orange' />
        </div>
    );
};


