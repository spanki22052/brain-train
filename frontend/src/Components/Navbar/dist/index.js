"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.GET_PRODUCTS_LIST = void 0;
var client_1 = require("@apollo/client");
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var react_redux_1 = require("react-redux");
var foodtypesActions_1 = require("../Redux/actions/foodtypesActions");
var productsTypesAction_1 = require("../Redux/actions/productsTypesAction");
var react_router_dom_1 = require("react-router-dom");
var styles_1 = require("./dist/styles");
var cart_1 = require("../SVG/cart");
require("./navbar.css");
var store_1 = require("../Redux/store");
var GET_FOOD_TYPES = client_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query {\n    foodtypes\n  }\n"], ["\n  query {\n    foodtypes\n  }\n"])));
exports.GET_PRODUCTS_LIST = client_1.gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query {\n    showAll {\n      title\n      id\n      description\n      price\n      image\n      dates\n      foodtype\n    }\n  }\n"], ["\n  query {\n    showAll {\n      title\n      id\n      description\n      price\n      image\n      dates\n      foodtype\n    }\n  }\n"])));
var NavbarComponent = function () {
    var foodTypesData = client_1.useQuery(GET_FOOD_TYPES);
    var productData = client_1.useQuery(exports.GET_PRODUCTS_LIST);
    var dispatch = react_redux_1.useDispatch();
    var cartList = store_1.useAppSelector(function (state) { return state.cartStateInterface; });
    var cartAmount = react_1.useCallback(function () { return cartList.productInfo.reduce(function (a, b) { return a + b.amount; }, 0); }, [cartList]);
    react_1.useEffect(function () {
        if (!foodTypesData.loading)
            foodTypesData.data !== undefined &&
                dispatch(foodtypesActions_1.updateDataAction(foodTypesData.data.foodtypes));
    }, [foodTypesData.data, foodTypesData.loading, dispatch]);
    react_1.useEffect(function () {
        if (!productData.loading)
            productData.data !== undefined &&
                dispatch(productsTypesAction_1.updateProductsAction(productData.data.showAll));
    }, [productData.data, productData.loading, dispatch]);
    return (React.createElement("div", { className: "navbar-component" },
        React.createElement(react_bootstrap_1.Navbar, { style: { backgroundColor: "#F0B340" }, expand: "lg" },
            React.createElement(react_bootstrap_1.Container, null,
                React.createElement(react_bootstrap_1.Navbar.Brand, null,
                    React.createElement(react_router_dom_1.Link, { style: styles_1.linkStyle, to: "/" },
                        React.createElement("img", { width: "167px", height: "43px", src: "/logo.png", alt: "logo" }))),
                React.createElement(react_bootstrap_1.Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }),
                React.createElement(react_bootstrap_1.Navbar.Collapse, { id: "basic-navbar-nav" },
                    React.createElement(react_bootstrap_1.Nav, { className: "me-auto" },
                        React.createElement(react_bootstrap_1.Nav.Link, { className: "cart-item-holder" },
                            React.createElement(react_router_dom_1.Link, { className: "badge-holder", style: styles_1.linkStyle, to: "/cart" },
                                React.createElement(cart_1.CartSVG, null),
                                React.createElement(react_bootstrap_1.Badge, { className: "badge-item", pill: true, bg: "danger" }, cartAmount() < 99
                                    ? cartAmount() === 0
                                        ? ""
                                        : cartAmount()
                                    : "99+")))))))));
};
exports["default"] = NavbarComponent;
var templateObject_1, templateObject_2;
