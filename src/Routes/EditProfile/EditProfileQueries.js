import { gql } from 'apollo-boost';

export const EDITPROFILE = gql`
  mutation editUser(
    $username: String
    $email: String
    $firstName: String
    $lastName: String
    $bio: String
    $avatar: String
  ) {
    editUser(
      username: String
      email: String
      firstName: String
      lastName: String
      bio: String
      avatar: String
    )
  }
`;
