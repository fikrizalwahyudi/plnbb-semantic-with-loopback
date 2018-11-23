import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { RealisasiKirim } from '../models/realisasi_kirim';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class RealisasiKirimService {

    constructor(private http: Http) {

    }

    public getAllRealisasiKirim(): Observable<RealisasiKirim[]> {
        return this.http
        .get(API_URL + '/realisasi_kirim')
        .map(response => {
            const listRealisasiKirim = response.json();
            return listRealisasiKirim.map((realisasiKirim) => new RealisasiKirim(realisasiKirim));
        })
        .catch(this.handleError);
    }

    public createRealisasiKirim(realisasiKirim: RealisasiKirim): Observable<RealisasiKirim> {
        return this.http
        .post(API_URL + '/realisasi_kirim', realisasiKirim)
        .map(response => {
            return new RealisasiKirim(response.json());
        })
        .catch(this.handleError);
    }

    public getRealisasiKirimById(realisasiKirimId: number): Observable<RealisasiKirim> {
        return this.http
        .get(API_URL + '/realisasi_kirim/' + realisasiKirimId)
        .map(response => {
            return new RealisasiKirim(response.json());
        })
        .catch(this.handleError);
    }

    public updateRealisasiKirim(realisasiKirim: RealisasiKirim): Observable<RealisasiKirim> {
        return this.http
        .put(API_URL + '/realisasi_kirim/' + realisasiKirim.id, realisasiKirim)
        .map(response => {
            return new RealisasiKirim(response.json());
        })
        .catch(this.handleError);
    }

    public deleteRealisasiKirimById(realisasiKirimId: number): Observable<null> {
        return this.http
        .delete(API_URL + '/realisasi_kirim/' + realisasiKirimId)
        .map(response => null)
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}