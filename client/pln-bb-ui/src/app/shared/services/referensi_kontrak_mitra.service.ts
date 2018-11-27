import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { ReferensiKontrakMitra } from '../models/referensi_kontrak_mitra';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ReferensiKontrakMitraService {

    constructor(private http: Http) {

    }

    public getAllReferensiKontrakMitra(): Observable<ReferensiKontrakMitra[]> {
        return this.http
        .get(API_URL + '/referensi_kontrak_mitra')
        .map(response => {
            const listReferensiKontrakMitra = response.json();
            return listReferensiKontrakMitra.map((referensiKontrakMitra) => new ReferensiKontrakMitra(referensiKontrakMitra));
        })
        .catch(this.handleError);
    }

    public createReferensiKontrakMitra(referensiKontrakMitra: ReferensiKontrakMitra): Observable<ReferensiKontrakMitra> {
        return this.http
        .post(API_URL + '/referensi_kontrak_mitra', referensiKontrakMitra)
        .map(response => {
            return new ReferensiKontrakMitra(response.json());
        })
        .catch(this.handleError);
    }

    public getReferensiKontrakMitraById(referensiKontrakMitraId: number): Observable<ReferensiKontrakMitra> {
        return this.http
        .get(API_URL + '/referensi_kontrak_mitra/' + referensiKontrakMitraId)
        .map(response => {
            return new ReferensiKontrakMitra(response.json());
        })
        .catch(this.handleError);
    }

    public updateReferensiKontrakMitra(referensiKontrakMitra: ReferensiKontrakMitra): Observable<ReferensiKontrakMitra> {
        return this.http
        .put(API_URL + '/referensi_kontrak_mitra/' + referensiKontrakMitra.id, referensiKontrakMitra)
        .map(response => {
            return new ReferensiKontrakMitra(response.json());
        })
        .catch(this.handleError);
    }

    public deleteReferensiKontrakMitraById(referensiKontrakMitraId: number): Observable<null> {
        return this.http
        .delete(API_URL + '/referensi_kontrak_mitra/' + referensiKontrakMitraId)
        .map(response => null)
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}