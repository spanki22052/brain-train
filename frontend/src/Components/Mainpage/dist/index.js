"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var shortDaysList = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
var Mainpage = function () {
    var _a = react_1.useState(""), currentDay = _a[0], setDay = _a[1];
    var _b = react_1.useState(""), currentFoodType = _b[0], setFoodType = _b[1];
    var foodTypes = store_1.useAppSelector(function (state) { return state.foodTypesInterface.foodtypes; });
    var ProductsList = store_1.useAppSelector(function (state) { return state.productDataInterface.showAll; });
    var daysTranslatorObject = {};
    shortDaysList.map(function (el, index) {
        var _a;
        return (daysTranslatorObject = __assign(__assign({}, daysTranslatorObject), (_a = {}, _a[el] = exports.daysList[index], _a)));
    });
    var dispatch = react_redux_1.useDispatch();
    var getFilteredProductList = react_1.useCallback(function () {
        var filteredProductList = ProductsList;
        if (currentDay) {
            filteredProductList = filteredProductList.filter(function (el) {
                return el.dates.includes(currentDay);
            });
        }
        if (currentFoodType) {
            filteredProductList = filteredProductList.filter(function (el) { return el.foodtype === currentFoodType; });
        }
        return filteredProductList;
    }, [ProductsList, currentFoodType, currentDay]);
    return (React.createElement(style_1.MainpageBlock, null,
        React.createElement(style_1.DaysStateHolder, null,
            React.createElement("p", { style: { cursor: "auto" } }, "\u0414\u0435\u043D\u044C \u043D\u0435\u0434\u0435\u043B\u0438:"),
            shortDaysList.map(function (el, index) {
                return (React.createElement(style_1.DaysP, { bkg: currentDay === exports.daysList[index] ? true : false, onClick: function () { return setDay(exports.daysList[index]); }, key: index }, el));
            }),
            React.createElement(style_1.DaysP, { onClick: function () { return setDay(""); }, bkg: currentDay ? false : true }, "\u0412\u0441\u0435")),
        React.createElement("select", { value: currentFoodType, onChange: function (e) { return setFoodType(e.target.value); } },
            foodTypes !== undefined &&
                foodTypes.map(function (el, index) {
                    return (React.createElement("option", { key: index, value: el }, el));
                }),
            React.createElement("option", { value: "" }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0431\u043B\u044E\u0434")),
        React.createElement(style_1.ProductBlocksHolder, null, ProductsList &&
            getFilteredProductList().map(function (el, index) {
                return (React.createElement(style_1.ProductBlock, { key: index },
                    React.createElement("img", { src: el.image, alt: "im" }),
                    React.createElement("h1", null, el.title),
                    React.createElement("h2", null, el.description),
                    React.createElement("span", { onClick: function () {
                            dispatch(cartAction_1.cartAction(el.id, el.price, el));
                        } },
                        React.createElement(plus_1.PlusSVG, null))));
            }))));
};
exports["default"] = Mainpage;
