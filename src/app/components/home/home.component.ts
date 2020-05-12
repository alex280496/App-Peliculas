import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cartelera:any;
  public peliculaspopulares:any[]=[];
  constructor(private _peliculaService:PeliculasService) {

    this._peliculaService.getCartelera().subscribe(
      (response:any)=>{
        console.log(response);
        this.cartelera=response;
      }
    );
    
    this._peliculaService.getPopulares().subscribe(
      (response:any)=>{
        this.peliculaspopulares=response.results;
        console.log(this.peliculaspopulares);
      }
    );
   }

  ngOnInit() {
    
  }

}
