"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RequestEntityObject = void 0;
var graphql_1 = require("@nestjs/graphql");
var typeorm_1 = require("typeorm");
var RequestEntityObject = /** @class */ (function () {
    function RequestEntityObject() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        graphql_1.Field(function (type) { return graphql_1.ID; })
    ], RequestEntityObject.prototype, "id");
    __decorate([
        typeorm_1.Column(),
        graphql_1.Field()
    ], RequestEntityObject.prototype, "amount");
    __decorate([
        typeorm_1.Column(),
        graphql_1.Field()
    ], RequestEntityObject.prototype, "productId");
    RequestEntityObject = __decorate([
        typeorm_1.Entity(),
        graphql_1.ObjectType()
    ], RequestEntityObject);
    return RequestEntityObject;
}());
exports.RequestEntityObject = RequestEntityObject;
