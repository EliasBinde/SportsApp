import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { NextPageContext } from "next";
import { withApollo } from "next-apollo";

const link = new HttpLink({
  uri: "https://tubedo.de/shop-api?languageCode=en", // Server URL (must be absolute)
  credentials: "include", // Additional fetch() options like credentials or headers
});

const createClient = (ctx: NextPageContext) =>
  new ApolloClient({
    link,
    credentials: "include",
    cache: new InMemoryCache({}),
    headers: {
      cookie:
        (typeof window === "undefined"
          ? ctx?.req?.headers.cookie
          : undefined) || "",
    },
    ssrMode: typeof window === "undefined",
  });

export default withApollo(createClient);
