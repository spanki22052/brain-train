"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var client_1 = require("@apollo/client");
var styles_1 = require("./styles");
var GET_REQUESTS_LIST = client_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query {\n    showRequestsList {\n      id\n      userId\n      comment\n      name\n      time\n      product {\n        amount\n        productId\n      }\n    }\n  }\n"], ["\n  query {\n    showRequestsList {\n      id\n      userId\n      comment\n      name\n      time\n      product {\n        amount\n        productId\n      }\n    }\n  }\n"])));
var CashierPage = function () {
    var data = client_1.useQuery(GET_REQUESTS_LIST).data;
    return data ? (React.createElement("div", { className: "cashier-page" },
        React.createElement(styles_1.RequestsBlock, null,
            React.createElement(styles_1.RequestsStatusH1, null, "\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u043A\u0430\u0437\u043E\u0432"),
            data.showRequestsList.map(function (el, index) {
                console.log(el);
                return (React.createElement(styles_1.RequestBlock, { key: index },
                    React.createElement("h1", null, el.name),
                    React.createElement("h2", null,
                        "\u0411\u0443\u0434\u0443 \u0447\u0435\u0440\u0435\u0437 ",
                        el.time,
                        " \u043C\u0438\u043D\u0443\u0442"),
                    React.createElement("div", { className: "elements-holder" },
                        React.createElement("h1", null, "19:50"),
                        React.createElement("button", null, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"))));
            })))) : (React.createElement("div", null,
        React.createElement("h1", null, "Loading")));
};
exports["default"] = CashierPage;
var templateObject_1;
