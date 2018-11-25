import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { RencanaPasokan } from '../models/rencana_pasokan';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class RencanaPasokanService {

    constructor(private http: Http) {

    }

    public getAllRencanaPasokan(): Observable<RencanaPasokan[]> {
        return this.http
        .get(API_URL + '/rencana_pasokan')
        .map(response => {
            const listRencanaPasokan = response.json();
            return listRencanaPasokan.map((rencanaPasokan) => new RencanaPasokan(rencanaPasokan));
        })
        .catch(this.handleError);
    }

    public createRencanaPasokan(rencanaPasokan: RencanaPasokan): Observable<RencanaPasokan> {
        return this.http
        .post(API_URL + '/rencana_pasokan', rencanaPasokan)
        .map(response => {
            return new RencanaPasokan(response.json());
        })
        .catch(this.handleError);
    }

    public getRencanaPasokanById(rencanaPasokanId: number): Observable<RencanaPasokan> {
        return this.http
        .get(API_URL + '/rencana_pasokan/' + rencanaPasokanId)
        .map(response => {
            return new RencanaPasokan(response.json());
        })
        .catch(this.handleError);
    }

    public updateRencanaPasokan(rencanaPasokan: RencanaPasokan): Observable<RencanaPasokan> {
        return this.http
        .put(API_URL + '/rencana_pasokan/' + rencanaPasokan.id, rencanaPasokan)
        .map(response => {
            return new RencanaPasokan(response.json());
        })
        .catch(this.handleError);
    }

    public deleteRencanaPasokanById(rencanaPasokanId: number): Observable<null> {
        return this.http
        .delete(API_URL + '/rencana_pasokan/' + rencanaPasokanId)
        .map(response => null)
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}