import * as React from 'react';

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
            <p>{text}</p>
        </div>
    );
};

export const Summary: React.FC<any> = ({ data }) => {
    // const { loading, error, data: statisticsData } = useQuery(GET_USER_REGISTRATION_STATISTICS);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Upps...There is an error. :( </p>;
    // const data = statisticsData?.getUserRegistrationStatistics;
    console.log(data);

    return (
        <>
            <div className='grid h-64 grid-cols-4 gap-6 m-10'>
                <SummaryItem numberText={data.totalInvitations} text='Invited users' style='border-8 border-mt-orange'></SummaryItem>
                <SummaryItem numberText={`${data.average} %`} text='Registered out of invited ' style='row-span-2 bg-emerald-300'></SummaryItem>
                <SummaryItem numberText={data.totalRegisteredUsers} text='Active users' style='col-span-2 row-span-2 border-8 border-mt-orange'></SummaryItem>
                <SummaryItem numberText={data.totalRegisteredUsers} text='Registered users' style='"text-white bg-mt-orange'></SummaryItem>
            </div>
        </>
    );
};


