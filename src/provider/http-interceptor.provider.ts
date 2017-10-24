import { Http, HttpModule, XHRBackend, RequestOptions, RequestOptionsArgs, Response, ConnectionBackend, Headers } from '@angular/http';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

export class HttpProvider extends Http {

    constructor(connectionBackend: ConnectionBackend, requestOptions: RequestOptions) {
        super(connectionBackend, requestOptions);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.get(url, this.getRequestOptionArgs(options));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.post(url, body, this.getRequestOptionArgs(options));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.put(url, body, this.getRequestOptionArgs(options));
    }

    options(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.options(url, this.getRequestOptionArgs(options));
    }

    getRequestOptionArgs(options?: RequestOptionsArgs) {

        const token: String = localStorage.getItem('token');

        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }

        if (token) {
            options.headers.append('Authorization', 'Bearer ' + token);
        }

        return options;

    }
}