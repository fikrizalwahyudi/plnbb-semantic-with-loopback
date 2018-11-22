import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { SumberTambang } from '../models/sumber_tambang';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class SumberTambangService {

    constructor(private http: Http) {

    }

    public getAllSumberTambang(): Observable<SumberTambang[]> {
        return this.http
        .get(API_URL + '/sumber_tambang')
        .map(response => {
            const listSumberTambang = response.json();
            return listSumberTambang.map((sumberTambang) => new SumberTambang(sumberTambang));
        })
        .catch(this.handleError);
    }

    public createSumberTambang(sumberTambang: SumberTambang): Observable<SumberTambang> {
        return this.http
        .post(API_URL + '/sumber_tambang', sumberTambang)
        .map(response => {
            return new SumberTambang(response.json());
        })
        .catch(this.handleError);
    }

    public getSumberTambangById(sumberTambangId: number): Observable<SumberTambang> {
        return this.http
        .get(API_URL + '/sumber_tambang/' + sumberTambangId)
        .map(response => {
            return new SumberTambang(response.json());
        })
        .catch(this.handleError);
    }

    public updateSumberTambang(sumberTambang: SumberTambang): Observable<SumberTambang> {
        return this.http
        .put(API_URL + '/sumber_tambang/' + sumberTambang.id, sumberTambang)
        .map(response => {
            return new SumberTambang(response.json());
        })
        .catch(this.handleError);
    }

    public deleteSumberTambangById(sumberTambangId: number): Observable<null> {
        return this.http
        .delete(API_URL + '/sumber_tambang/' + sumberTambangId)
        .map(response => null)
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}