import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { ReferensiKontrakPltu } from '../models/referensi_kontrak_pltu';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ReferensiKontrakPltuService {

    constructor(private http: Http) {

    }

    public getAllReferensiKontrakPltu(): Observable<ReferensiKontrakPltu[]> {
        return this.http
        .get(API_URL + '/referensi_kontrak_pltu')
        .map(response => {
            const listReferensiKontrakPltu = response.json();
            return listReferensiKontrakPltu.map((referensiKontrakPltu) => new ReferensiKontrakPltu(referensiKontrakPltu));
        })
        .catch(this.handleError);
    }

    public createReferensiKontrakPltu(referensiKontrakPltu: ReferensiKontrakPltu): Observable<ReferensiKontrakPltu> {
        return this.http
        .post(API_URL + '/referensi_kontrak_pltu', referensiKontrakPltu)
        .map(response => {
            return new ReferensiKontrakPltu(response.json());
        })
        .catch(this.handleError);
    }

    public getReferensiKontrakPltuById(referensiKontrakPltuId: number): Observable<ReferensiKontrakPltu> {
        return this.http
        .get(API_URL + '/referensi_kontrak_pltu/' + referensiKontrakPltuId)
        .map(response => {
            return new ReferensiKontrakPltu(response.json());
        })
        .catch(this.handleError);
    }

    public updateReferensiKontrakPltu(referensiKontrakPltu: ReferensiKontrakPltu): Observable<ReferensiKontrakPltu> {
        return this.http
        .put(API_URL + '/referensi_kontrak_pltu/' + referensiKontrakPltu.id, referensiKontrakPltu)
        .map(response => {
            return new ReferensiKontrakPltu(response.json());
        })
        .catch(this.handleError);
    }

    public deleteReferensiKontrakPltuById(referensiKontrakPltuId: number): Observable<null> {
        return this.http
        .delete(API_URL + '/referensi_kontrak_pltu/' + referensiKontrakPltuId)
        .map(response => null)
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}