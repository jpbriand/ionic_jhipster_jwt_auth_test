import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthProvider {

    constructor(private http: Http) { }

    login(login: string, password: string): Observable<any> {

        return this.http.post('http://127.0.0.1:8080/api/authenticate', { username: login, password: password }).map((r) => this.authenticateSuccess(r.json()));//.headers.get('Authorization'));
    }

    isAuthenticated(): Observable<any> {
        return this.http.get('http://127.0.0.1:8080/api/account').map((r) => { console.log(r); r.json().ok; });
    }

    private authenticateSuccess(res) {
        const token = res['id_token'];
        localStorage.setItem('token', token);
        return token;
    }
}
