/* eslint-disable import/no-anonymous-default-export */
import { gql } from "@apollo/client";

export default {
  Queries: {
    getProfile: gql`
      query GetProfiles {
        profiles {
          name
          cv {
            url
          }
        }
      }
    `,

    getAvatar: gql`
      query GetProfile {
        profiles {
          name
          avatar {
            url
          }
        }
      }
    `,

    getBio: gql`
      query GetBio($id: String) {
        profile(where: { userId: $id }) {
          cv {
            url
          }
          bio
        }
      }
    `,

    getServices: gql`
      query GetServices {
        services {
          id
          title
          serviceDesc
        }
      }
    `,

    getPrices: gql`
      query GetPrices {
        prices {
          id
          packageName
          packagePrice
          priceType
          freelanceUrl
          packageServices {
            id
            isIncluded
            packageService
          }
        }
      }
    `,

    getTestimonials: gql`
      query GetTestimonials {
        testimonials {
          id
          userName
          userProfession
          quote
          userImage {
            url
          }
        }
      }
    `,
  },
};
