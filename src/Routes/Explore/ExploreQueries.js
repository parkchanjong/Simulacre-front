import { gql } from 'apollo-boost';

export const EXPLORE = gql`
  {
    explorePost {
      id
      files {
        url
      }
      likeCount
      commentCount
    }
  }
`;
