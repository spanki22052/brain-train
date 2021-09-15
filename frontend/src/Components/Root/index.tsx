import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "redux";
import AppState from "../Redux/reducers/AppState";
import NavbarComponent from "../Navbar";
import Mainpage from "../Mainpage";
import CartPage from "../CartPage";
import "./root.css";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

interface Props {
  store: Store<AppState>;
}

const Root: React.FunctionComponent<Props> = (props) => {
  return (
    <Provider store={props.store}>
      <ApolloProvider client={client}>
        <Router>
          <NavbarComponent />
          <Switch>
            <Route path="/" exact>
              <Mainpage />
            </Route>
            <Route path="/cart" exact>
              <CartPage />
            </Route>
          </Switch>
        </Router>
      </ApolloProvider>
    </Provider>
  );
};

export default Root;
