import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();

        if (status >= 500) {
            response
                .status(500)
                .json({
                    statusCode: 500,
                    message: `Oops, something happened, our highly trained French engineers are already looking at it!`,
                });
        } else {
            response.status(status).json({
                statusCode: status,
                message: exception.message,
            });
        }
    }
}
