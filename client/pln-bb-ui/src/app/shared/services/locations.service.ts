import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { Locations } from '../models/locations';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class LocationsService {

    constructor(private http: Http) {

    }

    public getAllLocations(): Observable<Locations[]> {
        return this.http
        .get(API_URL + '/locations')
        .map(response => {
            const listLocations = response.json();
            return listLocations.map((locations) => new Locations(locations));
        })
        .catch(this.handleError);
    }

    public createLocations(locations: Locations): Observable<Locations> {
        return this.http
        .post(API_URL + '/locations', locations)
        .map(response => {
            return new Locations(response.json());
        })
        .catch(this.handleError);
    }

    public getLocationsById(locationsId: number): Observable<Locations> {
        return this.http
        .get(API_URL + '/locations/' + locationsId)
        .map(response => {
            return new Locations(response.json());
        })
        .catch(this.handleError);
    }

    public updateLocations(locations: Locations): Observable<Locations> {
        return this.http
        .put(API_URL + '/locations/' + locations.id, locations)
        .map(response => {
            return new Locations(response.json());
        })
        .catch(this.handleError);
    }

    public deleteLocationsById(locationsId: number): Observable<null> {
        return this.http
        .delete(API_URL + '/locations/' + locationsId)
        .map(response => null)
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}