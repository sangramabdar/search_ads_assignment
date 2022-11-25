import { Response, Request } from "express";
import { searchAdsService } from "./search.service";

async function searchAdsController(
  req: Request,
  res: Response,
  errorHandlingMiddleware
) {
  try {
    const result = await searchAdsService(req, errorHandlingMiddleware);

    if (!result) return;

    res.json(result);
  } catch (error) {
    errorHandlingMiddleware(error);
  }
}

export default searchAdsController;
