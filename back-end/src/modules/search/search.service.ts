import { Request } from "express";
import { searchAds } from "./search.repository";

async function searchAdsService(req: Request, errorHandlingMiddleware) {
  const searchQuery = req.query["q"];
  if (!searchQuery) {
    errorHandlingMiddleware({
      message: "searchQuery is not provided",
      statusCode: 400,
    });
    return null;
  }
  const ads = await searchAds(searchQuery);
  return ads;
}

export { searchAdsService };
