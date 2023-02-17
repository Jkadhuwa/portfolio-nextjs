/* eslint-disable import/no-anonymous-default-export */
import { gql } from "@apollo/client";

export default {
  Queries: {
    getExperiences: gql`
      query GetExperiences {
        resumes(orderBy: createdAt_DESC) {
          badge
          desc
          experience
          certificate
          education
          id
          logo {
            url
          }
          logoAlt
          subTitle
          title
        }
      }
    `,
    getSkills: gql`
      query GetSkills {
        skills {
          id
          knowledge
          backend {
            field
            id
            value
          }
          frontEnd {
            field
            id
            value
          }
          languages {
            field
            id
            value
          }
        }
      }
    `,
  },
};
