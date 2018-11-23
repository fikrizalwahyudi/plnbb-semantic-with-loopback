import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { JenisTambang } from '../models/jenis_tambang';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class JenisTambangService {

    constructor(private http: Http) {

    }

    public getAllJenisTambang(): Observable<JenisTambang[]> {
        return this.http
        .get(API_URL + '/jenis_tambang')
        .map(response => {
            const listJenisTambang = response.json();
            return listJenisTambang.map((jenisTambang) => new JenisTambang(jenisTambang));
        })
        .catch(this.handleError);
    }

    public createJenisTambang(jenisTambang: JenisTambang): Observable<JenisTambang> {
        return this.http
        .post(API_URL + '/jenis_tambang', jenisTambang)
        .map(response => {
            return new JenisTambang(response.json());
        })
        .catch(this.handleError);
    }

    public getJenisTambangById(jenisTambangId: number): Observable<JenisTambang> {
        return this.http
        .get(API_URL + '/jenis_tambang/' + jenisTambangId)
        .map(response => {
            return new JenisTambang(response.json());
        })
        .catch(this.handleError);
    }

    public updateJenisTambang(jenisTambang: JenisTambang): Observable<JenisTambang> {
        return this.http
        .put(API_URL + '/jenis_tambang/' + jenisTambang.id, jenisTambang)
        .map(response => {
            return new JenisTambang(response.json());
        })
        .catch(this.handleError);
    }

    public deleteJenisTambangById(jenisTambangId: number): Observable<null> {
        return this.http
        .delete(API_URL + '/jenis_tambang/' + jenisTambangId)
        .map(response => null)
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}