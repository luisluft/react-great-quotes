import { Route, Switch, Redirect } from "react-router";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout.js";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/quotes" />
        </Route>
        <Route exact path="/quotes">
          <AllQuotes />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
