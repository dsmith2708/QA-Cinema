import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getGetCurrentFilmsUrl() {
    return "//localhost:4200/server/films/current"
  }

  getGetFutureFilmsUrl() {
    return "//localhost:4200/server/films/future"
  }

  getGetAllShowingsUrl() {
    return "//localhost:4200/server/showings"
  }
  getFilmUrl(filmId:Number){
    return "//localhost:4200/server/films/";
  }

  getCurrentFilms(): Observable<any> {
    return this.http.get(this.getGetCurrentFilmsUrl());
  }

  getFutureFilms() : Observable<any> {
    return this.http.get(this.getGetFutureFilmsUrl());
  }
  getFilm(filmId:Number): Observable<any> {
    return this.http.get(this.getFilmUrl() + filmId);
  }


  getAllShowings(): Observable<any> {
    return this.http.get(this.getGetAllShowingsUrl());
  }
}
