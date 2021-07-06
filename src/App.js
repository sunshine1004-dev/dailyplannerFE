import "./App.css";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { UserProvider, useUser } from "./contexts/UserContext";

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_API_ENDPOINT,
  fetchOptions: {
    credentials: "include",
  },
  request: (operation) => {
    const token = localStorage.getItem("token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : null,
      },
    });
  },
});

function Main() {
  const { handleCheckForUser, appIsLoaded } = useUser();

  useEffect(() => {
    handleCheckForUser();
  }, [handleCheckForUser]);

  return (
    appIsLoaded && (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    )
  );
}

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider>
        <UserProvider>
          <Main />
        </UserProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
