"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlingMiddleWare = void 0;
const response_body_builder_1 = __importDefault(require("./response-body-builder"));
function errorHandlingMiddleWare(error, request, response, next) {
    let responseBody = new response_body_builder_1.default();
    if (error instanceof Error) {
        //handle implicit errors like - server side
        responseBody.setError(error.message).setStatus(500);
        response.status(500);
    }
    else {
        //handle explicit errors like - data validations , authentication.
        responseBody.setError(error.message).setStatus(error.statusCode);
        response.status(error.statusCode);
    }
    return response.json(responseBody);
}
exports.errorHandlingMiddleWare = errorHandlingMiddleWare;
