import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { Roles } from '../models/roles';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class RolesService {

    constructor(private http: Http) {

    }

    public getAllRoles(): Observable<Roles[]> {
        return this.http
        .get(API_URL + '/roles')
        .map(response => {
            const listRoles = response.json();
            return listRoles.map((roles) => new Roles(roles));
        })
        .catch(this.handleError);
    }

    public createRoles(roles: Roles): Observable<Roles> {
        return this.http
        .post(API_URL + '/roles', roles)
        .map(response => {
            return new Roles(response.json());
        })
        .catch(this.handleError);
    }

    public getRolesById(rolesId: number): Observable<Roles> {
        return this.http
        .get(API_URL + '/roles/' + rolesId)
        .map(response => {
            return new Roles(response.json());
        })
        .catch(this.handleError);
    }

    public updateRoles(roles: Roles): Observable<Roles> {
        return this.http
        .put(API_URL + '/roles/' + roles.id, roles)
        .map(response => {
            return new Roles(response.json());
        })
        .catch(this.handleError);
    }

    public deleteRolesById(rolesId: number): Observable<null> {
        return this.http
        .delete(API_URL + '/roles/' + rolesId)
        .map(response => null)
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}