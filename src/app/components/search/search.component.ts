import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  buscar:string="";
  constructor(private _peliculaService:PeliculasService) { }

  ngOnInit() {
  }

  buscarPelicula(){
    if(this.buscar.length==0){
      return; //si no escribe nada hace un return para que no dispare la funcion
    }
    this._peliculaService.buscarPelicula(this.buscar).subscribe(
      resp=>{
        console.log(resp);
      }
    );
  }
}
