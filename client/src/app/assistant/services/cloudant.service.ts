import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Message } from '@app/models';
import { CloudantResponse } from '@app/models';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CloudantService {

  host = environment.url;
  path = '/api/cloudant/';

  url = this.host + this.path;

  constructor(private http: HttpClient) { }

  addDocument(message: Message): Observable<CloudantResponse> {
    return this.http.post<CloudantResponse>(this.url + 'newIntent', message, httpOptions);
  }

}
