import { Request, Response } from 'express';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  constructor() {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let status = 500;
    let errorMessage = exception.message;

    try {
      status = exception.getStatus();
      /** @description class validator를 통해 message가 string[]인 경우가 있어서 아래와 같이 예외 처리  */
      const exceptionResponse = exception.getResponse();
      if (typeof exceptionResponse === 'object') {
        if (exceptionResponse['message']) {
          errorMessage =
            typeof exceptionResponse['message'] === 'string'
              ? exceptionResponse['message']
              : exceptionResponse['message'].join('\r\n');
        }
      }
    } catch (e) {}

    response.status(status).json({
      statusCode: status,
      message: errorMessage,
      path: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}
