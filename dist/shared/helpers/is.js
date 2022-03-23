"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunction = exports.isObject = exports.isUndefined = exports.isBoolean = exports.isNumber = exports.isString = void 0;
function isString(value) {
    return typeof value === 'string';
}
exports.isString = isString;
function isNumber(value) {
    return typeof value === 'number';
}
exports.isNumber = isNumber;
function isBoolean(value) {
    return typeof value === 'boolean';
}
exports.isBoolean = isBoolean;
function isUndefined(value) {
    return typeof value === 'undefined';
}
exports.isUndefined = isUndefined;
function isObject(value) {
    return typeof value === 'object' && value !== null;
}
exports.isObject = isObject;
function isFunction(value) {
    return typeof value === 'function';
}
exports.isFunction = isFunction;
