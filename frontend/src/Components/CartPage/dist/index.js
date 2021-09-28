"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_router_1 = require("react-router");
var cartAction_1 = require("../Redux/actions/cartAction");
var store_1 = require("../Redux/store");
var styles_1 = require("./styles");
var trashSVG_1 = require("./trashSVG");
var CartPage = function () {
    var productsList = store_1.useAppSelector(function (state) { return state.productDataInterface.showAll; });
    var cartList = store_1.useAppSelector(function (state) { return state.cartStateInterface; });
    var dispatch = react_redux_1.useDispatch();
    var history = react_router_1.useHistory();
    var cartSum = react_1.useCallback(function () { return cartList.productInfo.reduce(function (a, b) { return a + b.price * b.amount; }, 0); }, [cartList]);
    var cartAmount = react_1.useCallback(function () { return cartList.productInfo.reduce(function (a, b) { return a + b.amount; }, 0); }, [cartList]);
    return (React.createElement(styles_1.CartComponent, null,
        React.createElement(styles_1.CartHolder, null,
            React.createElement(styles_1.CartStateH1, null,
                "\u041A\u043E\u0440\u0437\u0438\u043D\u0430 (",
                cartAmount(),
                ")"),
            cartList.productInfo.length > 0 ? (cartList.productInfo.map(function (el, index) {
                var product = productsList.find(function (element) { return element.id === el.id; });
                return (product && (React.createElement(styles_1.CartProductBlock, { key: index },
                    React.createElement("img", { src: product.image, alt: "as" }),
                    React.createElement("div", { className: "text-holder" },
                        React.createElement("h1", null, product === null || product === void 0 ? void 0 : product.title),
                        React.createElement("h1", { className: "price" },
                            " ",
                            product.price,
                            ".00\u0440 ")),
                    React.createElement("div", { className: "buttons-holder" },
                        React.createElement("button", { style: {
                                color: cartList.productInfo[index].amount === 1
                                    ? "gray"
                                    : "black"
                            }, onClick: function () {
                                return dispatch(cartAction_1.ProductMinusOneAction(product.id, product.price));
                            } }, "-"),
                        React.createElement("p", null, cartList.productInfo[index].amount),
                        React.createElement("button", { onClick: function () {
                                return dispatch(cartAction_1.ProductPlusOneAction(product.id, product.price));
                            } }, "+"),
                        React.createElement(styles_1.TrashButton, { onClick: function () {
                                dispatch(cartAction_1.RemoveCartAction(index, product.price * cartList.productInfo[index].amount, cartList.productInfo[index].amount));
                            } },
                            React.createElement(trashSVG_1.TrashSVG, null))))));
            })) : (React.createElement("p", null, "\u0412\u0430\u0448\u0430 \u043A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430")),
            React.createElement(styles_1.CurrentSumH1, null,
                "\u0412\u0441\u0435\u0433\u043E: ",
                cartSum(),
                ".00p "),
            React.createElement(styles_1.SendCartButton, { onClick: function () { return history.push("/"); } }, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"))));
};
exports["default"] = CartPage;
