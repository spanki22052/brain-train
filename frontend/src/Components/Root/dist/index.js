"use strict";
exports.__esModule = true;
var client_1 = require("@apollo/client");
require("bootstrap/dist/css/bootstrap.min.css");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var Navbar_1 = require("../Navbar");
var Mainpage_1 = require("../Mainpage");
var CartPage_1 = require("../CartPage");
require("./root.css");
var Admin_1 = require("../Admin");
var Cashier_1 = require("../Cashier");
var client = new client_1.ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache: new client_1.InMemoryCache()
});
var Root = function (props) {
    return (React.createElement(react_redux_1.Provider, { store: props.store },
        React.createElement(client_1.ApolloProvider, { client: client },
            React.createElement(react_router_dom_1.BrowserRouter, null,
                React.createElement(Navbar_1["default"], null),
                React.createElement(react_router_dom_1.Switch, null,
                    React.createElement(react_router_dom_1.Route, { path: "/", exact: true },
                        React.createElement(Mainpage_1["default"], null)),
                    React.createElement(react_router_dom_1.Route, { path: "/cart", exact: true },
                        React.createElement(CartPage_1["default"], null)),
                    React.createElement(react_router_dom_1.Route, { path: "/admin" },
                        React.createElement(Admin_1["default"], null)),
                    React.createElement(react_router_dom_1.Route, { path: "/cashier" },
                        React.createElement(Cashier_1["default"], null)))))));
};
exports["default"] = Root;
