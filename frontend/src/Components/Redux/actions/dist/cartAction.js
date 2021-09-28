"use strict";
exports.__esModule = true;
exports.RemoveCartAction = exports.ProductMinusOneAction = exports.ProductPlusOneAction = exports.cartAction = void 0;
exports.cartAction = function (id, sum, product) {
    return {
        type: "ADD_NEW_PRODUCT",
        payload: id,
        sum: sum,
        product: product
    };
};
exports.ProductPlusOneAction = function (id, sum) {
    return {
        type: "PRODUCT_PLUS_ONE",
        id: id,
        sum: sum
    };
};
exports.ProductMinusOneAction = function (id, sum) {
    return {
        type: "PRODUCT_MINUS_ONE",
        id: id,
        sum: sum
    };
};
exports.RemoveCartAction = function (id, sum, amount) {
    return {
        type: "REMOVE_PRODUCT",
        id: id,
        minusSum: sum,
        minusAmount: amount
    };
};
