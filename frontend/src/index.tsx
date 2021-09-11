import ReactDOM from 'react-dom';
import './index.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import reportWebVitals from './reportWebVitals';
import Mainpage from './Components/Mainpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>

    <Router>
      <NavbarComponent />
      <Switch>
        <Route path="/" exact>
          <Mainpage />
        </Route>
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);

reportWebVitals();
