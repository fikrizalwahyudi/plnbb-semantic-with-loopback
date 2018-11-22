import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { UnloadingRealisasiKirim } from '../models/unloading_realisasi_kirim';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class UnloadingRealisasiKirimService {

    constructor(private http: Http) {

    }

    public getAllUnloadingRealisasiKirim(): Observable<UnloadingRealisasiKirim[]> {
        return this.http
        .get(API_URL + '/unloading_realisasi_kirim')
        .map(response => {
            const listUnloadingRealisasiKirim = response.json();
            return listUnloadingRealisasiKirim.map((unloadingRealisasiKirim) => new UnloadingRealisasiKirim(unloadingRealisasiKirim));
        })
        .catch(this.handleError);
    }

    public createUnloadingRealisasiKirim(unloadingRealisasiKirim: UnloadingRealisasiKirim): Observable<UnloadingRealisasiKirim> {
        return this.http
        .post(API_URL + '/unloading_realisasi_kirim', unloadingRealisasiKirim)
        .map(response => {
            return new UnloadingRealisasiKirim(response.json());
        })
        .catch(this.handleError);
    }

    public getUnloadingRealisasiKirimById(unloadingRealisasiKirimId: number): Observable<UnloadingRealisasiKirim> {
        return this.http
        .get(API_URL + '/unloading_realisasi_kirim/' + unloadingRealisasiKirimId)
        .map(response => {
            return new UnloadingRealisasiKirim(response.json());
        })
        .catch(this.handleError);
    }

    public updateUnloadingRealisasiKirim(unloadingRealisasiKirim: UnloadingRealisasiKirim): Observable<UnloadingRealisasiKirim> {
        return this.http
        .put(API_URL + '/unloading_realisasi_kirim/' + unloadingRealisasiKirim.id, unloadingRealisasiKirim)
        .map(response => {
            return new UnloadingRealisasiKirim(response.json());
        })
        .catch(this.handleError);
    }

    public deleteUnloadingRealisasiKirimById(unloadingRealisasiKirimId: number): Observable<null> {
        return this.http
        .delete(API_URL + '/unloading_realisasi_kirim/' + unloadingRealisasiKirimId)
        .map(response => null)
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}