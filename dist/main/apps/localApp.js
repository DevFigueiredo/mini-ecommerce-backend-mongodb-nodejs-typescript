"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const awilix_express_1 = require("awilix-express");
const errors_middlewares_1 = require("../../shared/infra/http/middlewares/errors-middlewares");
const container_1 = require("../../shared/container");
const morgan_body_1 = __importDefault(require("morgan-body"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
exports.app = app;
app.use((0, express_1.json)());
app.use((0, cors_1.default)());
const logger = container_1.container.resolve('logger');
const loggerStream = {
    write: (message) => {
        logger.info(message);
        return true;
    }
};
app.use(body_parser_1.default.json());
(0, morgan_body_1.default)(app, { stream: loggerStream });
app.use('/uploads/images', express_1.default.static('uploads/images'));
app.use((0, awilix_express_1.scopePerRequest)(container_1.container));
app.use((0, awilix_express_1.loadControllers)('./../../shared/infra/http/controllers/awilix-express/**/*.ts', { cwd: __dirname }));
app.use((0, awilix_express_1.loadControllers)('./../../shared/infra/http/controllers/awilix-express/**/*.js', { cwd: __dirname }));
app.use(errors_middlewares_1.errorsMiddleware);
