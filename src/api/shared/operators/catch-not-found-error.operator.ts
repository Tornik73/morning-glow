import { HttpException, HttpStatus } from '@nestjs/common';
import { MonoTypeOperatorFunction, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Context } from '../interfaces';

export function catchNotFoundError<T>(
  message = 'Not Found',
): MonoTypeOperatorFunction<T> {
  return (input$: Observable<T>): Observable<T> => {
    return input$.pipe(
      map(item => {
        if (item) {
          return item;
        }
        throw new HttpException(
          {
            data: null,
            message,
          } as Context<T>,
          HttpStatus.NOT_FOUND,
        );
      }),
    );
  };
}
