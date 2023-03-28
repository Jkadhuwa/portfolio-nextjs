/* eslint-disable import/no-anonymous-default-export */
import { gql } from "@apollo/client";

export default {
  Queries: {
    getServices: gql`
      query GetServices {
        services {
          id
          title
          description,
          icon
        }
      }
    `,
  },
};
