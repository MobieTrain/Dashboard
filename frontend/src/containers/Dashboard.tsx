import { SectionTitle } from '../components/SectionTitle';
import { Table } from '../components/Table';
import { GET_USERS_MT } from '../queries/user';


export const Dashboard = () => {
  // const { loading: loadingUsersByCountry, error: errorUsersByCountry, data: usersByCountry } = useQuery(GET_USERS_BY_COUNTRY);
  // const { loading: loadingUsersByRole, error: errorUsersByRole, data: usersByRole } = useQuery(GET_USERS_BY_ROLE);


  // if (loadingUsersByCountry && loadingUsersByRole) return <p>Loading...</p>;
  // if (errorUsersByCountry || errorUsersByRole) return <p>Upps...There is an error. :( </p>;

  return (
    <div>
      <SectionTitle title='Summary'></SectionTitle>
      {/* <Summary /> */}
      <Table query={GET_USERS_MT} />
      {/*<SectionTitle title='Charts'></SectionTitle>
       <div className='flex justify-center mb-24'>
        <BarChart data={usersByCountry.getUsersByCountry} dataKey='totalCount' xAxisKeys='country' layout='horizontal'></BarChart>
        <PieChart data={usersByCountry.getUsersByCountry} dataKey='percentage' nameKey='country'></PieChart>
      </div>
      <div className='flex justify-center'>
        <LineChart data={usersByRole.getUsersByRole} dataKey='totalCount' xAxisKeys='role'></LineChart>
      </div>
      <div className='flex justify-center mt-12'>
        <RadarChart data={usersByRole.getUsersByRole}></RadarChart>
      </div> */}
    </div>);
};

