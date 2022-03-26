import React from "react";
import "./App.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";

function App() {
  const { REACT_APP_GRAPHQL_URL, REACT_APP_GRAPHQL_SECRET } = process.env;
  console.log(process.env.REACT_APP_GRAPHQL_URL);
  console.log(process.env.REACT_APP_GRAPHQL_SECRET);
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: REACT_APP_GRAPHQL_URL,
    headers: {
      "x-hasura-admin-secret": REACT_APP_GRAPHQL_SECRET,
    },
  });

  return (
    <ApolloProvider client={client}>
      <div className="app">
        <Sidebar />
        <Map />
        {/* <p>
          <a
            href="https://www.flaticon.com/free-icons/location"
            title="location icons"
          >
            Location icons created by Yogi Aprelliyanto - Flaticon
          </a>
        </p> */}
      </div>
    </ApolloProvider>
  );
}

export default App;
