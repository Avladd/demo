import { ApolloProvider } from "@apollo/client";
import { CssBaseline } from "@mui/material";
import client from "./apollo";
import Main from "./components/Main";

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <CssBaseline />
        <Main />
      </ApolloProvider>
    </>
  );
}

export default App;
