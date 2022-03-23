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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModel = void 0;
const mongoose = __importStar(require("mongoose"));
const CustomerSchema = new mongoose.Schema({
    _id: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    cpf: { type: String },
    rg: { type: String },
    gender: { type: String, enum: ["owman", "men", "other"], default: "other" },
    birthDate: { type: Date },
    phoneNumber: { type: String },
    postalCode: { type: String },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    publicPlace: { type: String },
    number: { type: String },
    district: { type: String },
    supplement: { type: String },
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }, _id: false });
exports.CustomerModel = mongoose.model('Customer', CustomerSchema);
