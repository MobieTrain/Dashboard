import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    getUsers {
        id
        name
        lastName
        country
        role
        isInvited
        isRegistered
    }
  }
`;

export const GET_USERS_MT = gql`
  query GetUsersMT {
    getUsersMT {
        id
        email
        first_name
        last_name
        last_me
        eula_accepted_at
    }
  }
`;

export const GET_USER_REGISTRATION_STATISTICS = gql`
  query GetUserRegistrationStatistics {
    getUserRegistrationStatistics {
      average
      totalRegisteredUsers
      totalInvitations
    }
  }
`;

export const GET_USERS_BY_COUNTRY = gql`
  query GetUsersByCountry {
    getUsersByCountry {
      country
      totalCount
      percentage
    }
  }
`;


export const GET_USERS_BY_ROLE = gql`
  query GetUsersByRole {
    getUsersByRole {
      role
      totalCount
      percentage
    }
  }
`;