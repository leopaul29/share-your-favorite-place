import { gql } from "@apollo/client";

export const insertInterestPointMutation = gql`
  mutation insertInterestPoint($longitude: numeric!, $latitude: numeric!) {
    insert_InterestPoints_one(
      object: { longitude: $longitude, latitude: $latitude }
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
