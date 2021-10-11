"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.RequestsResolver = void 0;
var graphql_1 = require("@nestjs/graphql");
var requests_entity_1 = require("./entities/requests.entity");
var RequestsResolver = /** @class */ (function () {
    function RequestsResolver(requestService) {
        this.requestService = requestService;
    }
    RequestsResolver.prototype.showRequestsList = function () {
        return this.requestService.findAll();
    };
    RequestsResolver.prototype.createRequest = function (request) {
        var newRequest = __assign({}, request);
        var dateTime = new Date().toString().split(' ')[4].split(':');
        newRequest['requestTime'] = dateTime[0] + ":" + dateTime[1];
        this.requestService.createProduct(newRequest);
        return 'Done';
    };
    RequestsResolver.prototype.removeRequest = function (id) {
        this.requestService.removeById(id);
        return 'Done';
    };
    __decorate([
        graphql_1.Query(function (returns) { return [requests_entity_1.RequestEntity]; })
    ], RequestsResolver.prototype, "showRequestsList");
    __decorate([
        graphql_1.Mutation(function (returns) { return String; }),
        __param(0, graphql_1.Args("request"))
    ], RequestsResolver.prototype, "createRequest");
    __decorate([
        graphql_1.Mutation(function (returns) { return String; }),
        __param(0, graphql_1.Args('id'))
    ], RequestsResolver.prototype, "removeRequest");
    RequestsResolver = __decorate([
        graphql_1.Resolver(function (of) { return requests_entity_1.RequestEntity; })
    ], RequestsResolver);
    return RequestsResolver;
}());
exports.RequestsResolver = RequestsResolver;
