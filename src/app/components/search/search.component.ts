import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  buscar:string="";
  sinresultados:boolean=false;
  constructor(private _peliculaService:PeliculasService,
              private route:ActivatedRoute) { 
      this.route.params.subscribe(params=>{
        console.log(params);
        if(params['texto']){
          this.buscar=params['texto'];
          this.buscarPelicula();
        }
      })
              }

  ngOnInit() {
  }

  buscarPelicula(){
    if(this.buscar.length==0){
      return; //si no escribe nada hace un return para que no dispare la funcion
    }
    this._peliculaService.buscarPelicula(this.buscar).subscribe(
      resp=>{
        console.log(resp);

        if(resp.length==0){
          console.log('no hay resultados');
          this.sinresultados=true;
        }
        if(resp.length!= 0){
          console.log('si hay resultados');
          this.sinresultados=false;
        }
      }
    );
  }
}
