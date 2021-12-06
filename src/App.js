import { Route, Switch, Redirect } from "react-router";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/quotes" />
      </Route>
      <Route exact path="/quotes">
        <AllQuotes />
      </Route>
      <Route path="/quotes/new-quote">
        <NewQuote />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetail />
      </Route>
    </Switch>
  );
}

export default App;
