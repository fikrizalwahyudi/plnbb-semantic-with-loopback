import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { Types } from '../models/types';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class TypesService {

    constructor(private http: Http) {

    }

    public getAllTypes(): Observable<Types[]> {
        return this.http
        .get(API_URL + '/types')
        .map(response => {
            const listTypes = response.json();
            return listTypes.map((types) => new Types(types));
        })
        .catch(this.handleError);
    }

    public createTypes(types: Types): Observable<Types> {
        return this.http
        .post(API_URL + '/types', types)
        .map(response => {
            return new Types(response.json());
        })
        .catch(this.handleError);
    }

    public getTypesById(typesId: number): Observable<Types> {
        return this.http
        .get(API_URL + '/types/' + typesId)
        .map(response => {
            return new Types(response.json());
        })
        .catch(this.handleError);
    }

    public updateTypes(types: Types): Observable<Types> {
        return this.http
        .put(API_URL + '/types/' + types.id, types)
        .map(response => {
            return new Types(response.json());
        })
        .catch(this.handleError);
    }

    public deleteTypesById(typesId: number): Observable<null> {
        return this.http
        .delete(API_URL + '/types/' + typesId)
        .map(response => null)
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}