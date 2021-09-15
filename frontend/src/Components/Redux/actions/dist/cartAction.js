"use strict";
exports.__esModule = true;
exports.RemoveCartAction = exports.ProductMinusOneAction = exports.ProductPlusOneAction = exports.cartAction = void 0;
exports.cartAction = function (id, sum) {
    return {
        type: "ADD_NEW_PRODUCT",
        payload: id,
        sum: sum
    };
};
exports.ProductPlusOneAction = function (id, sum) {
    return {
        type: "PRODUCT_PLUS_ONE",
        payload: id,
        sum: sum
    };
};
exports.ProductMinusOneAction = function (id, sum) {
    return {
        type: "PRODUCT_MINUS_ONE",
        payload: id,
        sum: sum
    };
};
exports.RemoveCartAction = function (id, sum) {
    console.log(id);
    return {
        type: "REMOVE_PRODUCT",
        payload: id,
        minusSum: sum
    };
};
