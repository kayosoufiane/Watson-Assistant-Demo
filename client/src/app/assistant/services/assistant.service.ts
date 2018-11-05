import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AssistantResponse, Context } from '@app/models';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AssistantService {

  host = environment.url;
  path = '/api/assistant';
  url = this.host + this.path;

  constructor(private http: HttpClient) { }

  message(text: string, context: Context): Observable<AssistantResponse> {
    return this.http.post<AssistantResponse>(
      this.url + '/message',
      { message: text, context: context },
      httpOptions
    );
  }

  messageWorkspaces(text: string, context: Context): Observable<AssistantResponse> {
    return this.http.post<AssistantResponse>(
      this.url + '/message-workspaces',
      { message: text, context: context },
      httpOptions
    );
  }

  messageTranslator(text: string, context: Context): Observable<AssistantResponse> {
    return this.http.post<AssistantResponse>(
      this.url + '/message-translator',
      { message: text, context: context },
      httpOptions
    );
  }
}
