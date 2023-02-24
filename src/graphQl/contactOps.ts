/* eslint-disable import/no-anonymous-default-export */
import { gql } from "@apollo/client";

export default {
  Mutation: {
    sendMessage: gql`
      mutation SendMessage($fullName: String!, $email: String!, $phone: String!, $message: String!, $service: String!) {
        createMessage(data: { name: $fullName, email: $email, phone: $phone, message: $message, service: $service }) {
          name
          email
          phone
          message
          service
        }
      }
    `,
  },
};
