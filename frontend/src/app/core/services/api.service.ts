import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { take, map } from "rxjs/operators";

@Injectable({providedIn: 'root'})
class ApiService{
    private baseUrl = 'http://localhost:4200/'

    constructor(private http: HttpClient) {}

    public get(link: string, params: {[key: string]: string}): Observable<any> {
        return this.http.get(`${this.baseUrl}${link}`, {params}).pipe(
            take(1), 
            map(data => {return data})) // TODO: modify
    } 

    public post(link: string, body: any): Observable<any> {
        return this.http.post(`${this.baseUrl}${link}`, body).pipe(take(1))
    }

    public put(link: string, body: any, params: {[key: string]: string}): Observable<any> {
        return this.http.put(`${this.baseUrl}${link}`, body, {params}).pipe(take(1))
    }

    public delete(link: string, params: {[key: string]: string}): Observable<any> {
        return this.http.delete(`${this.baseUrl}${link}`, {params}).pipe(take(1))
    }
}

export default ApiService;