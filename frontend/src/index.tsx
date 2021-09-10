import ReactDOM from 'react-dom';
import './index.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import reportWebVitals from './reportWebVitals';
import Mainpage from './Components/Mainpage';

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Mainpage></Mainpage>
  </ApolloProvider>,
  document.getElementById('root')
);

reportWebVitals();
