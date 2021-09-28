"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var react_hooks_1 = require("@apollo/react-hooks");
var graphql_tag_1 = require("graphql-tag");
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var Mainpage_1 = require("../../Mainpage");
var store_1 = require("../../Redux/store");
var styles_1 = require("./styles");
var CREATE_NEW_PRODUCT = graphql_tag_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation CreateProduct($product: ProductInput!) {\n    createProduct(product: $product) {\n      title\n    }\n  }\n"], ["\n  mutation CreateProduct($product: ProductInput!) {\n    createProduct(product: $product) {\n      title\n    }\n  }\n"])));
var AddProductPage = function () {
    var _a = react_1.useState({
        title: "",
        description: "",
        price: 0,
        foodtype: "",
        image: "",
        dates: []
    }), inputsState = _a[0], setInputs = _a[1];
    var addProduct = react_hooks_1.useMutation(CREATE_NEW_PRODUCT)[0];
    var foodTypes = store_1.useAppSelector(function (state) { return state.foodTypesInterface.foodtypes; });
    var _b = react_1.useState(Mainpage_1.daysList.map(function () { return false; })), checkboxesState = _b[0], setCheckboxesState = _b[1];
    var setDatesFunc = function (isTrue, indx) {
        var removeIndex = inputsState.dates.findIndex(function (el) { return el === Mainpage_1.daysList[indx]; });
        setInputs(__assign(__assign({}, inputsState), { dates: isTrue
                ? __spreadArrays(inputsState.dates, [Mainpage_1.daysList[indx]]) : inputsState.dates.filter(function (el, index) { return removeIndex !== index; }) }));
    };
    return (React.createElement(styles_1.AdminPageBlock, null,
        React.createElement(styles_1.AddProductBlock, null,
            React.createElement("input", { type: "input", value: inputsState.title, onChange: function (e) { return setInputs(__assign(__assign({}, inputsState), { title: e.target.value })); }, placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430" }),
            React.createElement("input", { type: "input", value: inputsState.description, onChange: function (e) {
                    return setInputs(__assign(__assign({}, inputsState), { description: e.target.value }));
                }, placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430" }),
            React.createElement("input", { type: "input", value: inputsState.price, onChange: function (e) {
                    return setInputs(__assign(__assign({}, inputsState), { price: parseInt(e.target.value) }));
                }, placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0435\u043D\u043D\u0438\u043A \u043D\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442" }),
            React.createElement("input", { type: "input", value: inputsState.image, onChange: function (e) { return setInputs(__assign(__assign({}, inputsState), { image: e.target.value })); }, placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0444\u043E\u0442\u043E" }),
            React.createElement("select", { value: inputsState.foodtype, onChange: function (e) {
                    return setInputs(__assign(__assign({}, inputsState), { foodtype: e.target.value }));
                } }, foodTypes &&
                foodTypes.map(function (el, index) {
                    return (React.createElement("option", { key: index, value: el }, el));
                })),
            React.createElement("div", { className: "checkboxes-holder" }, Mainpage_1.daysList.map(function (el, index) {
                return (React.createElement("div", { key: index, className: "checkbox-block" },
                    React.createElement(react_bootstrap_1.Form.Check, { checked: checkboxesState[index], onChange: function () {
                            var x = __spreadArrays(checkboxesState);
                            x[index] = !checkboxesState[index];
                            setDatesFunc(!checkboxesState[index], index);
                            setCheckboxesState(x);
                        }, className: "checkbox", type: "checkbox" }),
                    React.createElement("p", null, el)));
            })),
            React.createElement("button", { onClick: function () {
                    setInputs({
                        title: "",
                        description: "",
                        price: 0,
                        foodtype: foodTypes[0],
                        image: "",
                        dates: []
                    });
                    addProduct({
                        variables: { product: inputsState }
                    });
                    setCheckboxesState("......".split(".").map(function () {
                        return false;
                    }));
                } }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"))));
};
exports["default"] = AddProductPage;
var templateObject_1;
