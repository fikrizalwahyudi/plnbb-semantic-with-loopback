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
        .get(API_URL + '/api/pltu')
        .map(response => {
            const listPltu = response.json();
            return listPltu.map((pltu) => new Pltu(pltu));
        })
        .catch(this.handleError);
    }

//   public createTodo(todo: Todo): Observable<Todo> {
//     return this.http
//       .post(API_URL + '/todos', todo)
//       .map(response => {
//         return new Todo(response.json());
//       })
//       .catch(this.handleError);
//   }

//   public getTodoById(todoId: number): Observable<Todo> {
//     return this.http
//       .get(API_URL + '/todos/' + todoId)
//       .map(response => {
//         return new Todo(response.json());
//       })
//       .catch(this.handleError);
//   }

//   public updateTodo(todo: Todo): Observable<Todo> {
//     return this.http
//       .put(API_URL + '/todos/' + todo.id, todo)
//       .map(response => {
//         return new Todo(response.json());
//       })
//       .catch(this.handleError);
//   }

//   public deleteTodoById(todoId: number): Observable<null> {
//     return this.http
//       .delete(API_URL + '/todos/' + todoId)
//       .map(response => null)
//       .catch(this.handleError);
//   }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}