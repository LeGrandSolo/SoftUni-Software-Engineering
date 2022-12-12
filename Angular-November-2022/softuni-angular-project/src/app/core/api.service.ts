import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpParamsOptions,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://parseapi.back4app.com';
  contentType: string = 'application/json';
  private options: {
    headers?: HttpHeaders | { [header: string]: string | string[] };
  } = {
    headers: {
      'X-Parse-Application-Id': 'TVeG6qrvAmJND9j8oAXILpXRE7YqwAL0QAWA6jtE',
      'X-Parse-REST-API-Key': 'UiFsng164fqhIFHpxs6LHNXAHkpL778PEoCvAKeG',
      'X-Parse-Revocable-Session': '1',
      'Content-Type': this.contentType,
    },
  };
  constructor(private http: HttpClient) {}
  post(url: string, body: object): Observable<Object> {
    return this.http.post(this.apiUrl + url, body, this.options);
  }
  get(url: string, data: { [param: string]: string }): Observable<Object> {
    const params = new URLSearchParams(data);
    url += '?' + params;
    return this.http.get(this.apiUrl + url, this.options);
  }
}
