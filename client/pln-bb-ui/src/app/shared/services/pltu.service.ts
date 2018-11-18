import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class PltuService {

    constructor(private http:Http) {
       
    }

    public getPltu() {
        
    }
}