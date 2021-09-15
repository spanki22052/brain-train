"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var cartAction_1 = require("../Redux/actions/cartAction");
var store_1 = require("../Redux/store");
var styles_1 = require("./styles");
var trashSVG_1 = require("./trashSVG");
var CartPage = function () {
    var _a = react_1.useState(false), isAll = _a[0], setAll = _a[1];
    var productsList = store_1.useAppSelector(function (state) { return state.productDataInterface; }).showAll;
    var cartList = store_1.useAppSelector(function (state) { return state.cartStateInterface; });
    var _b = react_1.useState(0), currentSum = _b[0], setCurrentSum = _b[1];
    var currentIds = cartList.productInfo.map(function (el) {
        return el.id;
    });
    var _c = react_1.useState(0), removeListCounter = _c[0], setRemoveListCounter = _c[1];
    var dispatch = react_redux_1.useDispatch();
    return (React.createElement(styles_1.CartComponent, null,
        React.createElement(styles_1.CartBlock, null,
            React.createElement("h1", null,
                "\u041A\u043E\u0440\u0437\u0438\u043D\u0430 (",
                cartList.amount,
                ")"),
            React.createElement("div", { className: "checkbox-text" },
                React.createElement("input", { type: "checkbox", checked: isAll, onChange: function () { return setAll(!isAll); } }),
                React.createElement("p", { onClick: function () { return setAll(!isAll); } }, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435"))),
        React.createElement(styles_1.CartHolder, null,
            currentIds.length > 0 ? (currentIds.map(function (el, index) {
                var product = productsList[el];
                var productSum = currentSum +
                    productsList[el].price * cartList.productInfo[index].amount;
                return (React.createElement(styles_1.CartProductBlock, { key: index },
                    React.createElement("img", { src: product.image, alt: "as" }),
                    React.createElement("div", { className: "text-holder" },
                        React.createElement("h1", null, product.title),
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
                                return dispatch(cartAction_1.ProductMinusOneAction(index, productsList[el].price));
                            } }, "-"),
                        React.createElement("p", null, cartList.productInfo[index].amount),
                        React.createElement("button", { onClick: function () {
                                return dispatch(cartAction_1.ProductPlusOneAction(index, productsList[el].price));
                            } }, "+")),
                    React.createElement(styles_1.TrashButton, { onClick: function () {
                            console.log(removeListCounter);
                            dispatch(cartAction_1.RemoveCartAction(el, productsList[el].price *
                                cartList.productInfo[el - removeListCounter].amount));
                            currentIds.splice(el, 1);
                            setRemoveListCounter(removeListCounter + 1);
                        } },
                        React.createElement(trashSVG_1.TrashSVG, null))));
            })) : (React.createElement("p", null, "\u0412\u0430\u0448\u0430 \u043A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u0443\u0441\u0442\u0430")),
            React.createElement(styles_1.CurrentSumH1, null,
                "\u0412\u0441\u0435\u0433\u043E: ",
                cartList.productsSum,
                ".00p "))));
};
exports["default"] = CartPage;
