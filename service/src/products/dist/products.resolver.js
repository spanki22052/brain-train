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
exports.ProductsResolver = void 0;
var graphql_1 = require("@nestjs/graphql");
var product_entity_1 = require("./entities/product.entity");
var ProductsResolver = /** @class */ (function () {
    function ProductsResolver(productsService) {
        this.productsService = productsService;
    }
    ProductsResolver.prototype.showAll = function () {
        return this.productsService.findAll();
    };
    ProductsResolver.prototype.createProduct = function (product) {
        return this.productsService.createProduct(product);
    };
    ProductsResolver.prototype.removeProduct = function (id) {
        this.productsService.removeProduct(id);
        return true;
    };
    ProductsResolver.prototype.findById = function (id) {
        return this.productsService.findById(id);
    };
    __decorate([
        graphql_1.Query(function (returns) { return [product_entity_1.Product]; })
    ], ProductsResolver.prototype, "showAll");
    __decorate([
        graphql_1.Mutation(function (returns) { return product_entity_1.Product; }),
        __param(0, graphql_1.Args('product'))
    ], ProductsResolver.prototype, "createProduct");
    __decorate([
        graphql_1.Mutation(function (returns) { return Boolean; }),
        __param(0, graphql_1.Args('id'))
    ], ProductsResolver.prototype, "removeProduct");
    __decorate([
        graphql_1.Query(function (returns) { return product_entity_1.Product; }),
        __param(0, graphql_1.Args('id'))
    ], ProductsResolver.prototype, "findById");
    ProductsResolver = __decorate([
        graphql_1.Resolver(function (of) { return product_entity_1.Product; })
    ], ProductsResolver);
    return ProductsResolver;
}());
exports.ProductsResolver = ProductsResolver;
