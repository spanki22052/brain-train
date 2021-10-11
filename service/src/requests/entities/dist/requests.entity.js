"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RequestEntity = void 0;
var graphql_1 = require("@nestjs/graphql");
var typeorm_1 = require("typeorm");
var product_request_entity_1 = require("./product-request.entity");
var RequestEntity = /** @class */ (function () {
    function RequestEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        graphql_1.Field(function (type) { return graphql_1.ID; })
    ], RequestEntity.prototype, "id");
    __decorate([
        typeorm_1.Column(),
        graphql_1.Field()
    ], RequestEntity.prototype, "userId");
    __decorate([
        typeorm_1.Column(),
        graphql_1.Field()
    ], RequestEntity.prototype, "commentTime");
    __decorate([
        typeorm_1.Column(),
        graphql_1.Field()
    ], RequestEntity.prototype, "requestTime");
    __decorate([
        typeorm_1.Column('json'),
        graphql_1.Field(function (type) { return [product_request_entity_1.RequestEntityObject]; })
    ], RequestEntity.prototype, "product");
    __decorate([
        typeorm_1.Column(),
        graphql_1.Field()
    ], RequestEntity.prototype, "name");
    RequestEntity = __decorate([
        typeorm_1.Entity(),
        graphql_1.ObjectType()
    ], RequestEntity);
    return RequestEntity;
}());
exports.RequestEntity = RequestEntity;
