import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PeliculasApp';
  constructor(private _peliculaService:PeliculasService){
    this._peliculaService.getPopulares().subscribe(
      response=>{
        console.log(response);
      }
    );
  }
}
