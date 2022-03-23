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
exports.RemoveProductOrderController = void 0;
const awilix_express_1 = require("awilix-express");
const http_status_helper_1 = require("../../../../../enums/http-status-helper");
const ensure_authenticate_1 = require("../../../middlewares/ensure-authenticate");
let RemoveProductOrderController = class RemoveProductOrderController {
    constructor({ removeProductOrderUseCase }) {
        this.removeProductOrderUseCase = removeProductOrderUseCase;
    }
    async execute(request, response) {
        const params = {
            customerId: request.customerId,
            productId: request.params.productId
        };
        await this.removeProductOrderUseCase.execute({ params });
        return response.status(http_status_helper_1.HttpStatusHelper.NoContent).end();
    }
};
__decorate([
    (0, awilix_express_1.DELETE)(),
    (0, awilix_express_1.route)('/remove-product/:productId'),
    (0, awilix_express_1.before)([ensure_authenticate_1.ensureAuthenticatedMiddleware]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RemoveProductOrderController.prototype, "execute", null);
RemoveProductOrderController = __decorate([
    (0, awilix_express_1.route)('/order'),
    __metadata("design:paramtypes", [Object])
], RemoveProductOrderController);
exports.RemoveProductOrderController = RemoveProductOrderController;
