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
    productInfo: []
};
exports.CartReducer = function (state, action) {
    var _a, _b, _c;
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "ADD_NEW_PRODUCT":
            var newList = __spreadArrays(state.productInfo);
            var isProductInCart = state.productInfo.findIndex(function (el) { return el.id === action.payload; });
            if (isProductInCart !== -1) {
                var updateProduct = __assign({ id: action.payload, amount: state.productInfo[isProductInCart].amount + 1 }, action.product);
                return {
                    productInfo: Object.assign([], newList, (_a = {},
                        _a[isProductInCart] = updateProduct,
                        _a))
                };
            }
            else {
                newList.push(__assign({ id: action.payload, amount: 1 }, action.product));
            }
            return {
                productInfo: newList
            };
        case "PRODUCT_PLUS_ONE":
            var newPlusList = __spreadArrays(state.productInfo);
            var productToPlus = newPlusList.findIndex(function (el) { return el.id === action.id; });
            var updatedPlus = __assign(__assign({}, newPlusList[productToPlus]), { amount: newPlusList[productToPlus].amount + 1 });
            return {
                productInfo: Object.assign([], newPlusList, (_b = {},
                    _b[productToPlus] = updatedPlus,
                    _b))
            };
        case "PRODUCT_MINUS_ONE":
            var newMinusList = __spreadArrays(state.productInfo);
            var minusProductId = newMinusList.findIndex(function (el) { return el.id === action.id; });
            if (newMinusList[minusProductId].amount === 1)
                return state;
            var updatedProduct = __assign(__assign({}, newMinusList[minusProductId]), { amount: newMinusList[minusProductId].amount - 1 });
            return {
                productInfo: Object.assign([], newMinusList, (_c = {},
                    _c[minusProductId] = updatedProduct,
                    _c))
            };
        case "REMOVE_PRODUCT":
            var newRemoveList = __spreadArrays(state.productInfo);
            newRemoveList.splice(action.id, 1);
            return __assign(__assign({}, state), { productInfo: newRemoveList });
        default:
            return state;
    }
};
