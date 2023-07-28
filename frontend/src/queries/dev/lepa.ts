import { gql } from '@apollo/client';

export const GET_PUBLISHED_LEPAS = gql`
query getPublishedLearningPathsMT {
    getPublishedLearningPathsMT {
        id
        published
        account_id
        slug
      
    }
  }`;

export const GET_PUBLISHED_LEPAS_PER_CLIENT = gql`
query GetNumberPublishedLearningPathsPerClientMT($accountId: Int) {
  getNumberPublishedLearningPathsPerClientMT(accountId: $accountId) {
        total
        published
    }
  }`;