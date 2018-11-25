import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { ReferensiKontrak } from '../models/referensi_kontrak';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ReferensiKontrakService {

    constructor(private http: Http) {

    }

    public getAllReferensiKontrak(): Observable<ReferensiKontrak[]> {
        return this.http
        .get(API_URL + '/referensi_kontrak')
        .map(response => {
            const listReferensiKontrak = response.json();
            return listReferensiKontrak.map((referensiKontrak) => new ReferensiKontrak(referensiKontrak));
        })
        .catch(this.handleError);
    }

    public createReferensiKontrak(referensiKontrak: ReferensiKontrak): Observable<ReferensiKontrak> {
        return this.http
        .post(API_URL + '/referensi_kontrak', referensiKontrak)
        .map(response => {
            return new ReferensiKontrak(response.json());
        })
        .catch(this.handleError);
    }

    public getReferensiKontrakById(referensiKontrakId: number): Observable<ReferensiKontrak> {
        return this.http
        .get(API_URL + '/referensi_kontrak/' + referensiKontrakId)
        .map(response => {
            return new ReferensiKontrak(response.json());
        })
        .catch(this.handleError);
    }

    public updateReferensiKontrak(referensiKontrak: ReferensiKontrak): Observable<ReferensiKontrak> {
        return this.http
        .put(API_URL + '/referensi_kontrak/' + referensiKontrak.id, referensiKontrak)
        .map(response => {
            return new ReferensiKontrak(response.json());
        })
        .catch(this.handleError);
    }

    public deleteReferensiKontrakById(referensiKontrakId: number): Observable<null> {
        return this.http
        .delete(API_URL + '/referensi_kontrak/' + referensiKontrakId)
        .map(response => null)
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}