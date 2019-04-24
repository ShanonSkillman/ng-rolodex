import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BackendService {
    url: string = 'http://localhost:4200';

    constructor(private http: HttpClient) { }

    getMovies() {
        const endpoint = this.url + '/api/movies';
        return this.http.get(endpoint).toPromise();
    }
}