import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getGetAllFilmsUrl() {
    return "//localhost:4200/server/films"
  }

  getGetAllShowingsUrl() {
    return "//localhost:4200/server/showings"
  }
  getFilmUrl(filmId:Number){
    return "//localhost:4200/server/films/";
  }

  getAllFilms(): Observable<any> {
    return this.http.get(this.getGetAllFilmsUrl());
  }
  getFilm(filmId:Number): Observable<any> {
    return this.http.get(this.getFilmUrl() + filmId);
  }


  getAllShowings(): Observable<any> {
    return this.http.get(this.getGetAllShowingsUrl());
  }
}
