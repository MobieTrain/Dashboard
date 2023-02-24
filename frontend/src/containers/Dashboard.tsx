import { SectionTitle } from '../components/SectionTitle';
import { Table } from '../components/Table';
import { GET_USERS_MT } from '../queries/user';


export const Dashboard = () => {

  return (
    <div>
      <SectionTitle title='Summary'></SectionTitle>
      <Table query={GET_USERS_MT} />
    </div>);
};

