"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerController = void 0;
const awilix_express_1 = require("awilix-express");
const http_status_helper_1 = require("../../../../../enums/http-status-helper");
let CreateCustomerController = class CreateCustomerController {
    constructor({ findByIdCustomerUseCase }) {
        this.findByIdCustomerUseCase = findByIdCustomerUseCase;
    }
    async execute(request, response) {
        const _id = request.params.id;
        const params = { _id };
        const customers = await this.findByIdCustomerUseCase.execute({ params });
        return response.status(http_status_helper_1.HttpStatusHelper.OK).json(customers);
    }
};
__decorate([
    (0, awilix_express_1.route)('/:id'),
    (0, awilix_express_1.GET)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CreateCustomerController.prototype, "execute", null);
CreateCustomerController = __decorate([
    (0, awilix_express_1.route)('/customer'),
    __metadata("design:paramtypes", [Object])
], CreateCustomerController);
exports.CreateCustomerController = CreateCustomerController;
