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