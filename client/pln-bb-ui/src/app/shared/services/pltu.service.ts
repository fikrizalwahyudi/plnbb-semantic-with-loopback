import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { Pltu } from '../models/pltu';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class PltuService {

    constructor(private http: Http) {

    }

    public getAllPltu(): Observable<Pltu[]> {
        return this.http
        .get(API_URL + '/pltu')
        .map(response => {
            const listPltu = response.json();
            return listPltu.map((pltu) => new Pltu(pltu));
        })
        .catch(this.handleError);
    }

    public createPltu(pltu: Pltu): Observable<Pltu> {
        return this.http
        .post(API_URL + '/pltu', pltu)
        .map(response => {
            return new Pltu(response.json());
        })
        .catch(this.handleError);
    }

    public getPltuById(pltuId: number): Observable<Pltu> {
        return this.http
        .get(API_URL + '/pltu/' + pltuId)
        .map(response => {
            return new Pltu(response.json());
        })
        .catch(this.handleError);
    }

    public updatePltu(pltu: Pltu): Observable<Pltu> {
        return this.http
        .put(API_URL + '/pltu/' + pltu.id, pltu)
        .map(response => {
            return new Pltu(response.json());
        })
        .catch(this.handleError);
    }

    public deletePltuById(pltuId: number): Observable<null> {
        return this.http
        .delete(API_URL + '/pltu/' + pltuId)
        .map(response => null)
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}