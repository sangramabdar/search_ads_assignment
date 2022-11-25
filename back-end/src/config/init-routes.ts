import { app } from "./init-server";
import { errorHandlingMiddleWare } from "../common/helper/error-middleware";
import RootController from "../modules/root/root.controller";
import searchAdsController from "../modules/search/search.controller";

async function initRoutes() {
  //routers to handle different routes

  app.get("/api/search", searchAdsController);
  app.use("*", RootController.wrongRoute);

  //global error handling middleware
  app.use(errorHandlingMiddleWare);
}

export default initRoutes;
