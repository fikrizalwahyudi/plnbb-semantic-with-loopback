import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { UserMitra } from '../models/user_mitra';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class UserMitraService {

    constructor(private http: Http) {

    }

    public getAllUserMitra(): Observable<UserMitra[]> {
        return this.http
        .get(API_URL + '/user_mitra')
        .map(response => {
            const listUserMitra = response.json();
            return listUserMitra.map((userMitra) => new UserMitra(userMitra));
        })
        .catch(this.handleError);
    }

    public createUserMitra(userMitra: UserMitra): Observable<UserMitra> {
        return this.http
        .post(API_URL + '/user_mitra', userMitra)
        .map(response => {
            return new UserMitra(response.json());
        })
        .catch(this.handleError);
    }

    public getUserMitraById(userMitraId: number): Observable<UserMitra> {
        return this.http
        .get(API_URL + '/user_mitra/' + userMitraId)
        .map(response => {
            return new UserMitra(response.json());
        })
        .catch(this.handleError);
    }

    public updateUserMitra(userMitra: UserMitra): Observable<UserMitra> {
        return this.http
        .put(API_URL + '/user_mitra/' + userMitra.id, userMitra)
        .map(response => {
            return new UserMitra(response.json());
        })
        .catch(this.handleError);
    }

    public deleteUserMitraById(userMitraId: number): Observable<null> {
        return this.http
        .delete(API_URL + '/user_mitra/' + userMitraId)
        .map(response => null)
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}