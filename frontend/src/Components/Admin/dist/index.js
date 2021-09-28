"use strict";
exports.__esModule = true;
var react_router_1 = require("react-router");
var AddProductPage_1 = require("./AddProductPage");
var RemoveProductPage_1 = require("./RemoveProductPage");
var styles_1 = require("./styles");
var Admin = function () {
    var pageState = react_router_1.useLocation().pathname;
    return (React.createElement(styles_1.AdminMainBlock, null,
        pageState === "/admin/add" && React.createElement(AddProductPage_1["default"], null),
        pageState === "/admin/remove" && React.createElement(RemoveProductPage_1["default"], null)));
};
exports["default"] = Admin;
