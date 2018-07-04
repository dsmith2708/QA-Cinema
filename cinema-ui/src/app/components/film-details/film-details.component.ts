import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film/film.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  films: Array<any>;
  showings: Array<any>;
  //filmId:Number;

  constructor(private filmService: FilmService ) { }

  ngOnInit() {
      //this.filmId =2;
      this.filmService.getFilm(1).subscribe(data => {
      this.films = data;
      console.log(data);
    });






  }



}
