"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchAdsService = void 0;
const search_repository_1 = require("./search.repository");
async function searchAdsService(req, errorHandlingMiddleware) {
    const searchQuery = req.query["q"];
    if (!searchQuery) {
        errorHandlingMiddleware({
            message: "searchQuery is not provided",
            statusCode: 400,
        });
        return null;
    }
    const ads = await (0, search_repository_1.searchAds)(searchQuery);
    return ads;
}
exports.searchAdsService = searchAdsService;
