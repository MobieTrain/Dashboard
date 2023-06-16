import { SectionTitle } from '../components/SectionTitle';
import { Table } from '../components/Table';
import { GET_USERS_MT } from '../queries/user';
import { Statistics } from './Statistics';
import * as React from 'react';

export const Dashboard = () => {
  return (
    <div>
      <SectionTitle title='Mobietrain' />
      <Statistics />
      <Table query={GET_USERS_MT} />
    </div>);
};

