"use strict";
exports.__esModule = true;
exports.daysList = void 0;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var cartAction_1 = require("../Redux/actions/cartAction");
var store_1 = require("../Redux/store");
var plus_1 = require("../SVG/plus");
var style_1 = require("./style");
exports.daysList = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
];
var Mainpage = function () {
    var _a = react_1.useState(""), currentDay = _a[0], setDay = _a[1];
    var _b = react_1.useState(""), currentFoodType = _b[0], setFoodType = _b[1];
    var foodTypes = store_1.useAppSelector(function (state) { return state.foodTypesInterface.foodtypes; });
    var ProductsList = store_1.useAppSelector(function (state) { return state.productDataInterface.showAll; });
    var dispatch = react_redux_1.useDispatch();
    return (React.createElement(style_1.MainpageBlock, null,
        React.createElement(style_1.TextHolder, null,
            exports.daysList.map(function (el, index) {
                return (React.createElement("p", { style: { cursor: "pointer" }, key: index, onClick: function () { return setDay(el); } }, el));
            }),
            React.createElement("p", { style: { cursor: "pointer" }, onClick: function () { return setDay(""); } }, "\u0412\u0441\u0435")),
        React.createElement(style_1.TextHolder, null,
            foodTypes !== undefined &&
                foodTypes.map(function (el, index) {
                    return (React.createElement("p", { style: { cursor: "pointer" }, key: index, onClick: function () { return setFoodType(el); } }, el));
                }),
            React.createElement("p", { style: { cursor: "pointer" }, onClick: function () { return setFoodType(""); } }, "\u0412\u0441\u0435")),
        React.createElement(style_1.ProductBlocksHolder, null, ProductsList !== undefined &&
            foodTypes !== undefined &&
            ProductsList.filter(function (el) {
                return currentDay ? el.dates.includes(currentDay) : true;
            })
                .filter(function (el) {
                return currentFoodType ? el.foodtype === currentFoodType : true;
            })
                .map(function (el, index) {
                return (React.createElement(style_1.ProductBlock, { key: index },
                    React.createElement("img", { src: el.image, alt: "im" }),
                    React.createElement("h1", null, el.title),
                    React.createElement("h2", null, el.description),
                    React.createElement("span", { onClick: function () {
                            dispatch(cartAction_1.cartAction(index, el.price));
                        } },
                        React.createElement(plus_1.PlusSVG, null))));
            }))));
};
exports["default"] = Mainpage;
