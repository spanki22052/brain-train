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

exports.__esModule = true;
exports.AddProductBlock = exports.AdminPageBlock = void 0;

var styled_components_1 = require("styled-components");

exports.AdminPageBlock = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n"], ["\n  width: 100%;\n  height: 100%;\n"])));
exports.AddProductBlock = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 400px;\n  height: 600px;\n  background-color: rgb(0, 0, 0, 0.01);\n  box-shadow: 0 0 12px rgb(0, 0, 0, 0.1);\n\n  border-radius: 10px;\n\n  position: absolute;\n  left: 50%;\n  top: 50%;\n\n  transform: translate(-50%, -50%);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n\n  input {\n    width: 80%;\n    height: 35px;\n  }\n\n  select {\n    width: 80%;\n    height: 30px;\n  }\n\n  button {\n    width: 50%;\n    height: 40px;\n  }\n\n  .checkboxes-holder {\n    width: 90%;\n    height: auto;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n  }\n\n  .checkbox-block {\n    width: 50%;\n    height: 20px;\n\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: 10px;\n  }\n\n  .checkbox-block input {\n    width: 20px;\n    height: 20px;\n  }\n\n  .checkbox-block p {\n    margin-left: 5px;\n  }\n"], ["\n  width: 400px;\n  height: 600px;\n  background-color: rgb(0, 0, 0, 0.01);\n  box-shadow: 0 0 12px rgb(0, 0, 0, 0.1);\n\n  border-radius: 10px;\n\n  position: absolute;\n  left: 50%;\n  top: 50%;\n\n  transform: translate(-50%, -50%);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n\n  input {\n    width: 80%;\n    height: 35px;\n  }\n\n  select {\n    width: 80%;\n    height: 30px;\n  }\n\n  button {\n    width: 50%;\n    height: 40px;\n  }\n\n  .checkboxes-holder {\n    width: 90%;\n    height: auto;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n  }\n\n  .checkbox-block {\n    width: 50%;\n    height: 20px;\n\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: 10px;\n  }\n\n  .checkbox-block input {\n    width: 20px;\n    height: 20px;\n  }\n\n  .checkbox-block p {\n    margin-left: 5px;\n  }\n"])));
var templateObject_1, templateObject_2;