"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RequestsModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var requests_entity_1 = require("./entities/requests.entity");
var requests_controller_1 = require("./requests.controller");
var requests_resolver_1 = require("./requests.resolver");
var requests_service_1 = require("./requests.service");
var RequestsModule = /** @class */ (function () {
    function RequestsModule() {
    }
    RequestsModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([requests_entity_1.RequestEntity])],
            providers: [requests_resolver_1.RequestsResolver, requests_service_1.RequestsService],
            controllers: [requests_controller_1.RequestsController]
        })
    ], RequestsModule);
    return RequestsModule;
}());
exports.RequestsModule = RequestsModule;
