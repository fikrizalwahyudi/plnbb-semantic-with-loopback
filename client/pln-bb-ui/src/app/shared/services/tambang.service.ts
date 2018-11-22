import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { Tambang } from '../models/tambang';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class TambangService {

    constructor(private http: Http) {

    }

    public getAllTambang(): Observable<Tambang[]> {
        return this.http
        .get(API_URL + '/tambang')
        .map(response => {
            const listTambang = response.json();
            return listTambang.map((tambang) => new Tambang(tambang));
        })
        .catch(this.handleError);
    }

    public createTambang(tambang: Tambang): Observable<Tambang> {
        return this.http
        .post(API_URL + '/tambang', tambang)
        .map(response => {
            return new Tambang(response.json());
        })
        .catch(this.handleError);
    }

    public getTambangById(tambangId: number): Observable<Tambang> {
        return this.http
        .get(API_URL + '/tambang/' + tambangId)
        .map(response => {
            return new Tambang(response.json());
        })
        .catch(this.handleError);
    }

    public updateTambang(tambang: Tambang): Observable<Tambang> {
        return this.http
        .put(API_URL + '/tambang/' + tambang.id, tambang)
        .map(response => {
            return new Tambang(response.json());
        })
        .catch(this.handleError);
    }

    public deleteTambangById(tambangId: number): Observable<null> {
        return this.http
        .delete(API_URL + '/tambang/' + tambangId)
        .map(response => null)
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}