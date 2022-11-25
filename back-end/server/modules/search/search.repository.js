"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchAds = void 0;
const db_1 = __importDefault(require("../../config/db"));
function createAggregateQuery(value) {
    return [
        {
            $lookup: {
                from: "company",
                localField: "companyId",
                foreignField: "_id",
                as: "company",
            },
        },
        {
            $match: {
                $or: [
                    {
                        primaryText: {
                            $regex: value,
                            $options: "i",
                        },
                    },
                    {
                        "company.name": {
                            $regex: value,
                            $options: "i",
                        },
                    },
                    {
                        headline: {
                            $regex: value,
                            $options: "i",
                        },
                    },
                    {
                        description: {
                            $regex: value,
                            $options: "i",
                        },
                    },
                ],
            },
        },
    ];
}
async function searchAds(searchQuery) {
    const db = await db_1.default.getDb();
    const AGGREGATE_QUERY = createAggregateQuery(searchQuery);
    let ads = await db.collection("ads").aggregate(AGGREGATE_QUERY).toArray();
    return ads;
}
exports.searchAds = searchAds;
