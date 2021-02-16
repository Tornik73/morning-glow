import { ApiProperty } from '@nestjs/swagger';
import { Observable } from 'rxjs';

export interface Context<T> {
  isSuccessful?: boolean;
  message: string;
  data: T;
}

export interface ContextPagination<T> {
  isSuccessful?: boolean;
  message: string;
  count: number;
  data: T;
}

export interface ValidationErrorContext<T> {
  errors: string[];
  message: string;
  data: T;
}

export type ResponseContext<T> = Observable<Context<T>>;
export type ResponseContextPagination<T> = Observable<ContextPagination<T>>;

export class ResponseContextModel<T> implements Context<T> {
  @ApiProperty()
  isSuccessful: boolean;

  @ApiProperty()
  message: string;

  @ApiProperty()
  data: T;
}

export class ValidationErrorContext<T> extends ResponseContextModel<T> {
  @ApiProperty()
  errors: string[];
}
