"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const app_1 = __importDefault(require("firebase/app"));
require("firebase/auth");
require("dotenv/config");
const firebaseAuth = app_1.default.initializeApp({
    apiKey: process.env.API_WEB_FIREBASE_KEY
});
const auth = firebaseAuth.auth();
exports.auth = auth;
