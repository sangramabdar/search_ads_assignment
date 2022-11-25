import { Response, Request } from "express";

import ResponseBodyBuilder from "./response-body-builder";

function errorHandlingMiddleWare(
  error:
    | {
        statusCode: number;
        message: string;
      }
    | Error,
  request: Request,
  response: Response,
  next
) {
  let responseBody = new ResponseBodyBuilder<string>();

  if (error instanceof Error) {
    //handle implicit errors like - server side
    responseBody.setError(error.message).setStatus(500);
    response.status(500);
  } else {
    //handle explicit errors like - data validations , authentication.
    responseBody.setError(error.message).setStatus(error.statusCode);
    response.status(error.statusCode);
  }

  return response.json(responseBody);
}

export { errorHandlingMiddleWare };
