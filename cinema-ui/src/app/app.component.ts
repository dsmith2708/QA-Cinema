import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { FilmService } from './services/film/film.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit  {
   // public search:any = '';
   // locked: any[] = [];
   films: Array<any>;
   title = 'app';

     constructor(private filmService: FilmService ) { }

    ngOnInit(){
        this.filmService.getAllFilms().subscribe(data => {
        this.films = data;
        console.log(data);
      });

    }

    function myFunction(){
      console.log("Testing");
    }




}
