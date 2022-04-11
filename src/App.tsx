import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainContainer from "./components/main_container";

import { PokemonProvider } from "components/pokemon/PokemonContext";

import { route, RouteType } from "./routes";

import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "graphql/setup";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <PokemonProvider>
          <MainContainer>
            <Suspense fallback={<></>}>
              <Routes>
                {route.map((r: RouteType, index: number) => (
                  <Route element={r.component} path={r.url} key={index} />
                ))}
              </Routes>
            </Suspense>
          </MainContainer>
        </PokemonProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
