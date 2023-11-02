/* eslint-disable import/no-anonymous-default-export */
import { gql } from "@apollo/client";

export default {
  Queries: {
    getProjects: gql`
    query GetProjects {
              projects(orderBy: createdAt_DESC){
                    id
                    title
                    description
                    tags
                    images{url}
                    sourceCode
                    about
                    client,
                    projectUrl
                }
            }
        `,
  },
};
