"use strict";

var __makeTemplateObject = void 0 && (void 0).__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArrays = void 0 && (void 0).__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

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
var SHOW_SOMETHING = graphql_tag_1["default"](templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  mutation ShowSomething($show: String!) {\n    showSomething(show: $show)\n  }\n"], ["\n  mutation ShowSomething($show: String!) {\n    showSomething(show: $show)\n  }\n"])));

var AdminPage = function AdminPage() {
  var _a = react_1.useState({
    title: "",
    description: "",
    price: 0,
    foodtype: "",
    image: "",
    dates: []
  }),
      inputsState = _a[0],
      setInputs = _a[1];

  var _b = react_hooks_1.useMutation(CREATE_NEW_PRODUCT),
      addProduct = _b[0],
      error = _b[1].error;

  var addShow = react_hooks_1.useMutation(SHOW_SOMETHING)[0];

  var _c = react_1.useState(""),
      foodTypeState = _c[0],
      setFoodType = _c[1];

  var foodTypes = store_1.useAppSelector(function (state) {
    return state.foodTypesInterface.foodtypes;
  });

  var _d = react_1.useState(Mainpage_1.daysList.map(function () {
    return false;
  })),
      checkboxesState = _d[0],
      setCheckboxesState = _d[1];

  react_1.useEffect(function () {
    setFoodType(foodTypes[0]);
    setInputs(__assign(__assign({}, inputsState), {
      foodtype: foodTypes[0]
    }));
  }, [foodTypes]);

  var setDatesFunc = function setDatesFunc(isTrue, indx) {
    var removeIndex = inputsState.dates.findIndex(function (el) {
      return el === Mainpage_1.daysList[indx];
    });
    setInputs(__assign(__assign({}, inputsState), {
      dates: isTrue ? __spreadArrays(inputsState.dates, [Mainpage_1.daysList[indx]]) : inputsState.dates.filter(function (el, index) {
        return removeIndex !== index;
      })
    }));
  };

  return React.createElement(styles_1.AdminPageBlock, null, React.createElement(styles_1.AddProductBlock, null, React.createElement("input", {
    type: "input",
    value: inputsState.title,
    onClick: function onClick() {
      return addShow({
        variables: {
          show: "ASD"
        }
      });
    },
    onChange: function onChange(e) {
      return setInputs(__assign(__assign({}, inputsState), {
        title: e.target.value
      }));
    },
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430"
  }), React.createElement("input", {
    type: "input",
    value: inputsState.description,
    onChange: function onChange(e) {
      return setInputs(__assign(__assign({}, inputsState), {
        description: e.target.value
      }));
    },
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430"
  }), React.createElement("input", {
    type: "input",
    value: inputsState.price,
    onChange: function onChange(e) {
      return setInputs(__assign(__assign({}, inputsState), {
        price: parseInt(e.target.value)
      }));
    },
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0435\u043D\u043D\u0438\u043A \u043D\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442"
  }), React.createElement("input", {
    type: "input",
    value: inputsState.image,
    onChange: function onChange(e) {
      return setInputs(__assign(__assign({}, inputsState), {
        image: e.target.value
      }));
    },
    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0444\u043E\u0442\u043E"
  }), React.createElement("select", {
    value: foodTypeState,
    onChange: function onChange(e) {
      return setInputs(__assign(__assign({}, inputsState), {
        foodtype: e.target.value
      }));
    }
  }, foodTypes && foodTypes.map(function (el, index) {
    return React.createElement("option", {
      key: index,
      value: el
    }, el);
  })), React.createElement("div", {
    className: "checkboxes-holder"
  }, Mainpage_1.daysList.map(function (el, index) {
    return React.createElement("div", {
      key: index,
      className: "checkbox-block"
    }, React.createElement(react_bootstrap_1.Form.Check, {
      checked: checkboxesState[index],
      onChange: function onChange() {
        var x = __spreadArrays(checkboxesState);

        x[index] = !checkboxesState[index];
        setDatesFunc(!checkboxesState[index], index);
        setCheckboxesState(x);
      },
      className: "checkbox",
      type: "checkbox"
    }), React.createElement("p", null, el));
  })), React.createElement("button", {
    onClick: function onClick() {
      setInputs({
        title: "",
        description: "",
        price: 0,
        foodtype: "",
        image: "",
        dates: []
      });
      addProduct({
        variables: {
          product: inputsState
        }
      });
    }
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")));
};

exports["default"] = AdminPage;
var templateObject_1, templateObject_2;