"use strict";
exports.__esModule = true;
exports.useAppSelector = void 0;
var redux_1 = require("redux");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var redux_2 = require("redux");
var foodtypes_1 = require("./reducers/foodtypes");
var productsList_1 = require("./reducers/productsList");
var react_redux_1 = require("react-redux");
var cartReducer_1 = require("./reducers/cartReducer");
var rootReducer = redux_2.combineReducers({
    foodTypesInterface: foodtypes_1.foodtypesReducer,
    productDataInterface: productsList_1.productsListReducer,
    cartStateInterface: cartReducer_1.CartReducer
});
exports.useAppSelector = react_redux_1.useSelector;
function configureStore() {
    return redux_1.createStore(rootReducer, undefined, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware()));
}
exports["default"] = configureStore;
