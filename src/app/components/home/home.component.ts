import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cartelera:any;
  public populares:any;// tipo any esto es para que no me de erroes en la vista si se demora en cargar la data
  public popularesNinos:any;
  constructor(private _peliculaService:PeliculasService) {

    this._peliculaService.getCartelera().subscribe(
      (response:any)=>{
        this.cartelera=response;
      }
    );
    
    this._peliculaService.getPopulares().subscribe(
      (response:any)=>{
        this.populares=response.results;
      }
    );
    this._peliculaService.getPopularesNinos().subscribe(
      (response:any)=>{
          this.popularesNinos=response;
      }
    );
   }

  ngOnInit() {
    
  }

}
