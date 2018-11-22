import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { PhoneContacts } from '../models/phone_contacts';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class PhoneContactsService {

    constructor(private http: Http) {

    }

    public getAllPhoneContacts(): Observable<PhoneContacts[]> {
        return this.http
        .get(API_URL + '/phone_contacts')
        .map(response => {
            const listPhoneContacts = response.json();
            return listPhoneContacts.map((phoneContacts) => new PhoneContacts(phoneContacts));
        })
        .catch(this.handleError);
    }

    public createPhoneContacts(phoneContacts: PhoneContacts): Observable<PhoneContacts> {
        return this.http
        .post(API_URL + '/phone_contacts', phoneContacts)
        .map(response => {
            return new PhoneContacts(response.json());
        })
        .catch(this.handleError);
    }

    public getPhoneContactsById(phoneContactsId: number): Observable<PhoneContacts> {
        return this.http
        .get(API_URL + '/phone_contacts/' + phoneContactsId)
        .map(response => {
            return new PhoneContacts(response.json());
        })
        .catch(this.handleError);
    }

    public updatePhoneContacts(phoneContacts: PhoneContacts): Observable<PhoneContacts> {
        return this.http
        .put(API_URL + '/phone_contacts/' + phoneContacts.id, phoneContacts)
        .map(response => {
            return new PhoneContacts(response.json());
        })
        .catch(this.handleError);
    }

    public deletePhoneContactsById(phoneContactsId: number): Observable<null> {
        return this.http
        .delete(API_URL + '/phone_contacts/' + phoneContactsId)
        .map(response => null)
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}