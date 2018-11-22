import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { Mitra } from '../models/mitra';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class MitraService {

    constructor(private http: Http) {

    }

    public getAllMitra(): Observable<Mitra[]> {
        return this.http
        .get(API_URL + '/mitra')
        .map(response => {
            const listMitra = response.json();
            return listMitra.map((mitra) => new Mitra(mitra));
        })
        .catch(this.handleError);
    }

    public createMitra(mitra: Mitra): Observable<Mitra> {
        return this.http
        .post(API_URL + '/mitra', mitra)
        .map(response => {
            return new Mitra(response.json());
        })
        .catch(this.handleError);
    }

    public getMitraById(mitraId: number): Observable<Mitra> {
        return this.http
        .get(API_URL + '/mitra/' + mitraId)
        .map(response => {
            return new Mitra(response.json());
        })
        .catch(this.handleError);
    }

    public updateMitra(mitra: Mitra): Observable<Mitra> {
        return this.http
        .put(API_URL + '/mitra/' + mitra.id, mitra)
        .map(response => {
            return new Mitra(response.json());
        })
        .catch(this.handleError);
    }

    public deleteMitraById(mitraId: number): Observable<null> {
        return this.http
        .delete(API_URL + '/mitra/' + mitraId)
        .map(response => null)
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}