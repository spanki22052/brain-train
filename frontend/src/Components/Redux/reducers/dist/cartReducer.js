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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.CartReducer = void 0;
var initialState = {
    amount: 0,
    productsSum: 0,
    productInfo: []
};
exports.CartReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "ADD_NEW_PRODUCT":
            var newList = __spreadArrays(state.productInfo);
            var isProductInCart = state.productInfo
                .map(function (el, index) {
                if (el.id === action.payload) {
                    return index;
                }
            })
                .filter(function (el) { return el !== undefined; });
            if (isProductInCart[0] !== undefined) {
                var spliceIndex = isProductInCart[0];
                newList.splice(spliceIndex, 1);
                newList.push({
                    id: action.payload,
                    amount: state.productInfo[spliceIndex].amount + 1
                });
            }
            else {
                newList.push({
                    id: action.payload,
                    amount: 1
                });
            }
            return {
                amount: state.amount + 1,
                productInfo: newList,
                productsSum: state.productsSum + action.sum
            };
        case "PRODUCT_PLUS_ONE":
            var newList = __spreadArrays(state.productInfo);
            var newAmount = newList[action.payload];
            newAmount["amount"] = newAmount.amount + 1;
            var newProductsList = newList.map(function (el, index) {
                return index === action.payload ? newAmount : el;
            });
            return {
                amount: state.amount + 1,
                productInfo: newProductsList,
                productsSum: state.productsSum + action.sum
            };
        case "PRODUCT_MINUS_ONE":
            var newMinusList = __spreadArrays(state.productInfo);
            if (newMinusList[action.payload].amount > 1) {
                var newMinusAmount = newMinusList[action.payload];
                newMinusAmount["amount"] = newMinusAmount.amount - 1;
                newMinusList = newMinusList.map(function (el, index) {
                    return index === action.payload ? newMinusAmount : el;
                });
                return {
                    amount: state.amount - 1,
                    productInfo: newMinusList,
                    productsSum: state.productsSum - action.sum
                };
            }
            else {
                return state;
            }
        case "REMOVE_PRODUCT":
            var newRemoveList = __spreadArrays(state.productInfo);
            newRemoveList.splice(action.id, 1);
            return __assign(__assign({}, state), { productInfo: newRemoveList, productsSum: state.productsSum - action.minusSum });
        default:
            return state;
    }
};
