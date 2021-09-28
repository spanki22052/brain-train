"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var client_1 = require("@apollo/client");
var graphql_tag_1 = require("graphql-tag");
var react_1 = require("react");
var store_1 = require("../../Redux/store");
var styles_1 = require("./styles");
var REMOVE_PRODUCT = graphql_tag_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation removeProduct($id: String!) {\n    removeProduct(id: $id)\n  }\n"], ["\n  mutation removeProduct($id: String!) {\n    removeProduct(id: $id)\n  }\n"])));
var RemoveProductPage = function () {
    var removeProduct = client_1.useMutation(REMOVE_PRODUCT)[0];
    var foodTypes = store_1.useAppSelector(function (state) { return state.foodTypesInterface.foodtypes; });
    var ProductsList = store_1.useAppSelector(function (state) { return state.productDataInterface.showAll; });
    var _a = react_1.useState(), productsListState = _a[0], setProductsList = _a[1];
    react_1.useEffect(function () {
        setProductsList(ProductsList);
    }, [ProductsList]);
    var _b = react_1.useState(0), currentProductId = _b[0], setCurrentProductId = _b[1];
    var _c = react_1.useState(0), currentFoodtypeId = _c[0], setCurrentFoodtypeId = _c[1];
    return (React.createElement(styles_1.RemoveProductBlock, null,
        React.createElement("select", { value: currentFoodtypeId === null || currentFoodtypeId === void 0 ? void 0 : currentFoodtypeId.toString(), onChange: function (e) {
                var currentValue = parseInt(e.target.value);
                setCurrentFoodtypeId(currentValue);
                setCurrentProductId(ProductsList[currentValue]
                    ? parseInt(ProductsList[currentValue].id)
                    : 0);
            } }, foodTypes &&
            ProductsList &&
            foodTypes.map(function (el, index) {
                return (React.createElement("option", { key: index, value: index }, el));
            })),
        React.createElement("select", { value: currentProductId === null || currentProductId === void 0 ? void 0 : currentProductId.toString(), onChange: function (e) { return setCurrentProductId(parseInt(e.target.value)); } }, productsListState &&
            foodTypes &&
            productsListState
                .filter(function (el) { return el.foodtype === foodTypes[currentFoodtypeId]; })
                .map(function (el, index) {
                return (React.createElement("option", { key: index, value: productsListState.findIndex(function (element) { return el.title === element.title; }) }, el.title));
            })),
        React.createElement("button", { onClick: function () {
                var curId = productsListState
                    ? productsListState[currentProductId].id
                    : 0;
                removeProduct({
                    variables: {
                        id: curId.toString()
                    }
                });
                setProductsList(productsListState === null || productsListState === void 0 ? void 0 : productsListState.filter(function (el, index) { return index !== currentProductId; }));
            } }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")));
};
exports["default"] = RemoveProductPage;
var templateObject_1;
