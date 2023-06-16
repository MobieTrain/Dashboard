import { gql } from '@apollo/client';

export const GET_REGISTERED_USERS_PER_CLIENT = gql`
query GetRegisteredUsersPerClient($accountId: Int) {
    getRegisteredUsersPerClient(accountId: $accountId) {
      id
      email
      username
      first_name
      last_name
      last_me
      eula_accepted_at
    }
  }`;