"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    connect(urlCluster) {
        try {
            mongoose_1.default.connect(urlCluster);
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = new Database();
