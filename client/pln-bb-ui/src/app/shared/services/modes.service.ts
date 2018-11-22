import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { Modes } from '../models/modes';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ModesService {

    constructor(private http: Http) {

    }

    public getAllModes(): Observable<Modes[]> {
        return this.http
        .get(API_URL + '/modes')
        .map(response => {
            const listModes = response.json();
            return listModes.map((modes) => new Modes(modes));
        })
        .catch(this.handleError);
    }

    public createModes(modes: Modes): Observable<Modes> {
        return this.http
        .post(API_URL + '/modes', modes)
        .map(response => {
            return new Modes(response.json());
        })
        .catch(this.handleError);
    }

    public getModesById(modesId: number): Observable<Modes> {
        return this.http
        .get(API_URL + '/modes/' + modesId)
        .map(response => {
            return new Modes(response.json());
        })
        .catch(this.handleError);
    }

    public updateModes(modes: Modes): Observable<Modes> {
        return this.http
        .put(API_URL + '/modes/' + modes.id, modes)
        .map(response => {
            return new Modes(response.json());
        })
        .catch(this.handleError);
    }

    public deleteModesById(modesId: number): Observable<null> {
        return this.http
        .delete(API_URL + '/modes/' + modesId)
        .map(response => null)
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}