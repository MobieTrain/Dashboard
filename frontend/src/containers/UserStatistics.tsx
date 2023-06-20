import { Summary } from './Summary';
import * as React from 'react';


// type UserStatistics = {
//     data: {
//         x: number;
//         data: any;
//     }
// }

export const UserStatistics: React.FC<any> = ({ data }) => {

    console.log('data user', data);

    const average = (data.registered * 100 / data.total).toFixed(2);
    const data2 = {
        totalInvitations: data.total,
        average,
        totalRegisteredUsers: data.registered
    };
    return <>

        {/* <p>Get registered users per client:
            {data}
        </p> */}
        {/* <p>Get registered users per client per day:
            {data2.getRegisteredUsersPerClientPerDay.length}
        </p> */}
        {data && <Summary data={data2} />}
    </>;
};