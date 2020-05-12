import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula:any;
  constructor(
    private route:ActivatedRoute,
    private _peliculaService:PeliculasService
  ) {
    this.route.params.subscribe(
      params=>{
        //console.log(params);
        this._peliculaService.getPelicula(params['id']).subscribe(
          response=>{
            console.log(response);
          }
        );
      }
    );
   }

  ngOnInit() {
  }

}
