import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { Users } from '../models/users';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class UsersService {

    constructor(private http: Http) {

    }

    public getAllUsers(): Observable<Users[]> {
        return this.http
        .get(API_URL + '/users')
        .map(response => {
            const listUsers = response.json();
            return listUsers.map((users) => new Users(users));
        })
        .catch(this.handleError);
    }

    public createUsers(users: Users): Observable<Users> {
        return this.http
        .post(API_URL + '/users', users)
        .map(response => {
            return new Users(response.json());
        })
        .catch(this.handleError);
    }

    public getUsersById(usersId: number): Observable<Users> {
        return this.http
        .get(API_URL + '/users/' + usersId)
        .map(response => {
            return new Users(response.json());
        })
        .catch(this.handleError);
    }

    public updateUsers(users: Users): Observable<Users> {
        return this.http
        .put(API_URL + '/users/' + users.id, users)
        .map(response => {
            return new Users(response.json());
        })
        .catch(this.handleError);
    }

    public deleteUsersById(usersId: number): Observable<null> {
        return this.http
        .delete(API_URL + '/users/' + usersId)
        .map(response => null)
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}