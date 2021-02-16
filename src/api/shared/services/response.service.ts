import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Context, ContextPagination } from '../interfaces';

@Injectable()
export class ResponseService {
  private readonly isResponseHasError: boolean = false;

  public successResponse<T>(data: T, message: string = null): Context<T> {
    const successResponse: Context<T> = {
      data: data,
      message: message,
    };
    return successResponse;
  }

  public successResponsePagination<T>(
    data: T,
    count: number,
    message: string = null,
  ): ContextPagination<T> {
    const successResponse: ContextPagination<T> = {
      data: data,
      message: message,
      count: count--,
    };
    return successResponse;
  }

  public errorResponseCode<T>(
    data: T,
    message: string,
    code: HttpStatus,
  ): Context<T> {
    const errorResponse: Context<T> = {
      isSuccessful: this.isResponseHasError,
      data: data,
      message: message,
    };
    throw new HttpException(errorResponse, code);
  }

  public errorResponse<T>(data: T, message = 'Bad request'): Context<T> {
    const errorResponse: Context<T> = {
      isSuccessful: this.isResponseHasError,
      data: data,
      message: message,
    };
    throw new HttpException(errorResponse, HttpStatus.BAD_REQUEST);
  }

  public forbidden(message: string): Context<null> {
    const errorResponse: Context<null> = {
      isSuccessful: this.isResponseHasError,
      data: null,
      message: message,
    };
    throw new HttpException(errorResponse, HttpStatus.FORBIDDEN);
  }

  public notFound<T>(message = 'Not found', data?: T): void {
    const errorResponse: Context<T> = {
      isSuccessful: this.isResponseHasError,
      data,
      message: message,
    };
    throw new HttpException(errorResponse, HttpStatus.NOT_FOUND);
  }
}
