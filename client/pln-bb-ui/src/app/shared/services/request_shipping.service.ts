import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { RequestShipping } from '../models/request_shipping';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class RequestShippingService {

    constructor(private http: Http) {

    }

    public getAllRequestShipping(): Observable<RequestShipping[]> {
        return this.http
        .get(API_URL + '/request_shipping')
        .map(response => {
            const listRequestShipping = response.json();
            return listRequestShipping.map((requestShipping) => new RequestShipping(requestShipping));
        })
        .catch(this.handleError);
    }

    public createRequestShipping(requestShipping: RequestShipping): Observable<RequestShipping> {
        return this.http
        .post(API_URL + '/request_shipping', requestShipping)
        .map(response => {
            return new RequestShipping(response.json());
        })
        .catch(this.handleError);
    }

    public getRequestShippingById(requestShippingId: number): Observable<RequestShipping> {
        return this.http
        .get(API_URL + '/request_shipping/' + requestShippingId)
        .map(response => {
            return new RequestShipping(response.json());
        })
        .catch(this.handleError);
    }

    public updateRequestShipping(requestShipping: RequestShipping): Observable<RequestShipping> {
        return this.http
        .put(API_URL + '/request_shipping/' + requestShipping.id, requestShipping)
        .map(response => {
            return new RequestShipping(response.json());
        })
        .catch(this.handleError);
    }

    public deleteRequestShippingById(requestShippingId: number): Observable<null> {
        return this.http
        .delete(API_URL + '/request_shipping/' + requestShippingId)
        .map(response => null)
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}