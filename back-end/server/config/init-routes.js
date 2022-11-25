"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const init_server_1 = require("./init-server");
const error_middleware_1 = require("../common/helper/error-middleware");
const root_controller_1 = __importDefault(require("../modules/root/root.controller"));
const search_controller_1 = __importDefault(require("../modules/search/search.controller"));
async function initRoutes() {
    //routers to handle different routes
    init_server_1.app.get("/api/search", search_controller_1.default);
    init_server_1.app.use("*", root_controller_1.default.wrongRoute);
    //global error handling middleware
    init_server_1.app.use(error_middleware_1.errorHandlingMiddleWare);
}
exports.default = initRoutes;
