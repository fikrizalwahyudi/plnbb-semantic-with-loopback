/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { _throw as throwError } from 'rxjs/observable/throw';
/**
 * Default error handler
 */
@Injectable()
export class ErrorHandler {
  public handleError(errorResponse: HttpErrorResponse): Observable<any> {
    return throwError(errorResponse.error.error || 'Server error');
  }
}
