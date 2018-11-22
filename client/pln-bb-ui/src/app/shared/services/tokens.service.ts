
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { Tokens } from '../models/tokens';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class TokensService {

    constructor(private http: Http) {

    }

    public getAllTokens(): Observable<Tokens[]> {
        return this.http
        .get(API_URL + '/tokens')
        .map(response => {
            const listTokens = response.json();
            return listTokens.map((tokens) => new Tokens(tokens));
        })
        .catch(this.handleError);
    }

    public createTokens(tokens: Tokens): Observable<Tokens> {
        return this.http
        .post(API_URL + '/tokens', tokens)
        .map(response => {
            return new Tokens(response.json());
        })
        .catch(this.handleError);
    }

    public getTokensById(tokensId: number): Observable<Tokens> {
        return this.http
        .get(API_URL + '/tokens/' + tokensId)
        .map(response => {
            return new Tokens(response.json());
        })
        .catch(this.handleError);
    }

    public updateTokens(tokens: Tokens): Observable<Tokens> {
        return this.http
        .put(API_URL + '/tokens/' + tokens.id, tokens)
        .map(response => {
            return new Tokens(response.json());
        })
        .catch(this.handleError);
    }

    public deleteTokensById(tokensId: number): Observable<null> {
        return this.http
        .delete(API_URL + '/tokens/' + tokensId)
        .map(response => null)
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}