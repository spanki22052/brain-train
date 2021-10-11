"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.RequestsController = void 0;
var common_1 = require("@nestjs/common");
var RequestsController = /** @class */ (function () {
    function RequestsController(requestsService) {
        this.requestsService = requestsService;
    }
    RequestsController.prototype.get = function (body) {
        this.requestsService.createProduct(body);
        return 'Sent';
    };
    RequestsController.prototype.hello = function () {
        return this.requestsService.findAll();
    };
    RequestsController.prototype["delete"] = function (id) {
        return this.requestsService.removeById(id);
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], RequestsController.prototype, "get");
    __decorate([
        common_1.Get()
    ], RequestsController.prototype, "hello");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], RequestsController.prototype, "delete");
    RequestsController = __decorate([
        common_1.Controller('requests')
    ], RequestsController);
    return RequestsController;
}());
exports.RequestsController = RequestsController;
