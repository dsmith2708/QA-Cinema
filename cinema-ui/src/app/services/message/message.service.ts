import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  getMessagesUrl() {
    return "//localhost:4200/server/messages"
  }

  getMessages(): Observable<any> {
    return this.http.get(this.getMessagesUrl());
  }

}
