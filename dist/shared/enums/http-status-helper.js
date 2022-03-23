"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatusHelper = void 0;
var HttpStatusHelper;
(function (HttpStatusHelper) {
    HttpStatusHelper[HttpStatusHelper["OK"] = 200] = "OK";
    HttpStatusHelper[HttpStatusHelper["Created"] = 201] = "Created";
    HttpStatusHelper[HttpStatusHelper["Accepted"] = 202] = "Accepted";
    HttpStatusHelper[HttpStatusHelper["NoContent"] = 204] = "NoContent";
    HttpStatusHelper[HttpStatusHelper["badRequest"] = 400] = "badRequest";
    HttpStatusHelper[HttpStatusHelper["Unauthorized"] = 401] = "Unauthorized";
    HttpStatusHelper[HttpStatusHelper["NotFound"] = 404] = "NotFound";
    HttpStatusHelper[HttpStatusHelper["Forbidden"] = 403] = "Forbidden";
    HttpStatusHelper[HttpStatusHelper["InternalServerError"] = 500] = "InternalServerError";
})(HttpStatusHelper = exports.HttpStatusHelper || (exports.HttpStatusHelper = {}));
