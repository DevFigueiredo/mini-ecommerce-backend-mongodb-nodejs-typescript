"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertQueryParamToWheres = void 0;
function convertQueryParamToWheres(params) {
    return {
        where: params
    };
}
exports.convertQueryParamToWheres = convertQueryParamToWheres;
