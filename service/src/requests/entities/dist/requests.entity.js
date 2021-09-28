"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RequestEntity = void 0;
var typeorm_1 = require("typeorm");
var RequestEntity = /** @class */ (function () {
    function RequestEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], RequestEntity.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], RequestEntity.prototype, "userId");
    __decorate([
        typeorm_1.Column()
    ], RequestEntity.prototype, "comment");
    __decorate([
        typeorm_1.Column('json')
    ], RequestEntity.prototype, "product");
    RequestEntity = __decorate([
        typeorm_1.Entity()
    ], RequestEntity);
    return RequestEntity;
}());
exports.RequestEntity = RequestEntity;
