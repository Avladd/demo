import { ApolloProvider } from "@apollo/client";
import { CssBaseline } from "@mui/material";
import client from "./apollo";
import Main from "./components/Main";
import SelectedMissionsContextProvider from "./context/selectedMissions";

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <SelectedMissionsContextProvider>
          <CssBaseline />
          <Main />
        </SelectedMissionsContextProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
