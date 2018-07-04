import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

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

  postMessage(newMessage): Observable<any> {
    console.log("post message in service ran")
    return this.http.post(this.getMessagesUrl(), newMessage, httpOptions);
  }

}
