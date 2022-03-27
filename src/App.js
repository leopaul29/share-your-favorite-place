import React, { useState } from "react";
import "./App.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";

function App() {
  const { REACT_APP_GRAPHQL_URL, REACT_APP_GRAPHQL_SECRET } = process.env;

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: REACT_APP_GRAPHQL_URL,
    headers: {
      "x-hasura-admin-secret": REACT_APP_GRAPHQL_SECRET,
    },
  });

  const [position, setPosition] = useState(null);
  const [map, setMap] = useState(null);

  return (
    <ApolloProvider client={client}>
      <div className="app">
        <Sidebar position={position} map={map} />
        <Map setPosition={setPosition} setMap={setMap} />
      </div>
    </ApolloProvider>
  );
}

export default App;
