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
exports.RequestsService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var requests_entity_1 = require("./entities/requests.entity");
var RequestsService = /** @class */ (function () {
    function RequestsService(requests) {
        this.requests = requests;
    }
    RequestsService.prototype.createProduct = function (requestDto) {
        this.requests.save(requestDto);
    };
    RequestsService.prototype.findAll = function () {
        return this.requests.find();
    };
    RequestsService.prototype.removeById = function (id) {
        return this.requests["delete"](id);
    };
    RequestsService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(requests_entity_1.RequestEntity))
    ], RequestsService);
    return RequestsService;
}());
exports.RequestsService = RequestsService;
