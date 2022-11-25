"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const search_service_1 = require("./search.service");
async function searchAdsController(req, res, errorHandlingMiddleware) {
    try {
        const result = await (0, search_service_1.searchAdsService)(req, errorHandlingMiddleware);
        if (!result)
            return;
        res.json(result);
    }
    catch (error) {
        errorHandlingMiddleware(error);
    }
}
exports.default = searchAdsController;
