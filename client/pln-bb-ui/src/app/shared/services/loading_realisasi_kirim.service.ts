import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { LoadingRealisasiKirim } from '../models/loading_realisasi_kirim';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class LoadingRealisasiKirimService {

    constructor(private http: Http) {

    }

    public getAllLoadingRealisasiKirim(): Observable<LoadingRealisasiKirim[]> {
        return this.http
        .get(API_URL + '/loading_realisasi_kirim')
        .map(response => {
            const listLoadingRealisasiKirim = response.json();
            return listLoadingRealisasiKirim.map((loadingRealisasiKirim) => new LoadingRealisasiKirim(loadingRealisasiKirim));
        })
        .catch(this.handleError);
    }

    public createLoadingRealisasiKirim(loadingRealisasiKirim: LoadingRealisasiKirim): Observable<LoadingRealisasiKirim> {
        return this.http
        .post(API_URL + '/loading_realisasi_kirim', loadingRealisasiKirim)
        .map(response => {
            return new LoadingRealisasiKirim(response.json());
        })
        .catch(this.handleError);
    }

    public getLoadingRealisasiKirimById(loadingRealisasiKirimId: number): Observable<LoadingRealisasiKirim> {
        return this.http
        .get(API_URL + '/loading_realisasi_kirim/' + loadingRealisasiKirimId)
        .map(response => {
            return new LoadingRealisasiKirim(response.json());
        })
        .catch(this.handleError);
    }

    public updateLoadingRealisasiKirim(loadingRealisasiKirim: LoadingRealisasiKirim): Observable<LoadingRealisasiKirim> {
        return this.http
        .put(API_URL + '/loading_realisasi_kirim/' + loadingRealisasiKirim.id, loadingRealisasiKirim)
        .map(response => {
            return new LoadingRealisasiKirim(response.json());
        })
        .catch(this.handleError);
    }

    public deleteLoadingRealisasiKirimById(loadingRealisasiKirimId: number): Observable<null> {
        return this.http
        .delete(API_URL + '/loading_realisasi_kirim/' + loadingRealisasiKirimId)
        .map(response => null)
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}