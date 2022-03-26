import { gql } from "@apollo/client";

export const insertInterestPointMutation = gql`
  mutation ($longitude: String!, $latitude: String!) {
    insert_InterestPoints_one(
      objects: { longitude: $longitude, latitude: $latitude }
    ) {
      id
    }
  }
`;

export const getInterestPointsQuery = gql`
  query getInterestPoints {
    InterestPoints(order_by: { created_at: desc }) {
      id
      longitude
      latitude
    }
  }
`;
