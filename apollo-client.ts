import { ApolloClient, InMemoryCache, createHttpLink, makeVar } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";

const httpLink = createHttpLink({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cle38l28l0g0c01um4qzn6yxo/master",
});
const authLink = setContext((_, { headers }) => {
  const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NzY0NDg0ODMsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xlMzhsMjhsMGcwYzAxdW00cXpuNnl4by9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZGUzYjNhOTMtOGI0Ni00ZjQ2LTg4ZTItMmUwNTk0ZDQ2M2RmIiwianRpIjoiY2xlNWU1NHlpMWMxdDAxdXJkdHYzY3RkNSJ9.b9gKJuDaor1k8MS8ovI0zl29xr9u8EJ8wqtcpF9snbXPq_t-rJfTiWRF2jXS2Txmwt37E4ky3pSFI4DnARL2FdOfq3rJEPfKQU2hcGNUc0gPJrUR303u2ATnDTuacLiQ7A62iyxvUqK6h_5r63fJ1CmhQfW1dOoorS5tGE9AsGgT0KPzvk-u0-wHZ1Wvj22wLvvXY2S70ikBZHHMy36BgMqgObIC1p5Sg4DsgxxrzlHxWkIBcRd9HhsMFLWvdL2iOUZB0XZMf0KSFbT4XZcTxLtuZXfU-IP4e93NKRSJuU1c-N-5yRwOYh_X5l-eBXGbTSIgApGB7VxMXaTfbWrECsbf3JbCUNjaVIRk1bH8j_Svt34O4SLlHHmZIkkG8jRMgQe5S6ZWVjrOGC2eEKSKo4s8scLdKeJaD-TqMfewTUyQKCeDATeTupGmK-PP7gowYvWkgHzZAj4145NVww3jfG5dndqEdLBOSt5L2Q_FGFFSGDZtB2eNOmvjNMvj7DDlNFDpY13CYxinx2dL3l1itPV2XMxqZ7g0eIUy1Pg6bgunDpJd6YdBPFUwufzPTziCQ-r_GMzwrDDdtarrldSPCs-h0_RstrCNvzTSvDoKVxRHs4h5Jn_M5-rKOaalMdO-xTk0HDGYPjto9fXU8xf_QT6kV9UFHqG9D-f2hBZiPZo";
  // return the headers to the context so httpLink can read them
  // console.log(process.env.NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN === "");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          worksConnection: relayStylePagination(),
          guestBooksConnection: relayStylePagination(),
          blogs: {
            //first merge func gets called and then read func. fetchMore always sends a network request which then comes back to the cache and gets merged
            //with the help of merge function. Then cache tries to read the query to send the required data back to the client. But if a read
            // function is present then the moment cache will try to read the query, it will instantly call the read function.
            read(existing, { args: { skip, first } }: any) {
              return existing && existing.slice(skip, skip + first);
            },
            keyArgs: false,
            merge(existing, incoming, { args: { skip } }: any) {
              const merged = existing ? existing.slice(0) : [];
              for (let i = 0; i < incoming.length; ++i) {
                merged[skip + i] = incoming[i];
              }
              return merged;
            },
          },
        },
      },
    },
  }),
});

export const currentWorkTab = makeVar<string>("All");
export const currentMenu = makeVar<number>(1);
export const currentWork = makeVar<null | string>(null);
export const showMenu = makeVar<boolean>(false);

export default client;
