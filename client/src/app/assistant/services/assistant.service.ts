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
      this.path + '/message',
      { message: text, context: context },
      httpOptions
    );
  }

  messageWorkspaces(text: string, context: Context): Observable<AssistantResponse> {
    return this.http.post<AssistantResponse>(
      this.path + '/message-workspaces',
      { message: text, context: context },
      httpOptions
    );
  }

  messageTranslator(text: string, context: Context): Observable<AssistantResponse> {
    return this.http.post<AssistantResponse>(
      this.path + '/message-translator',
      { message: text, context: context },
      httpOptions
    );
  }

  getImage(): Observable<Object> {
    return this.http.get<Object>('http://9.128.177.44:1880/chatbot_image', httpOptions);
  }
}
