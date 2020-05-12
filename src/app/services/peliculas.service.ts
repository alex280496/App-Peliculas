import { Injectable } from '@angular/core';
import {HttpClient, HttpClientJsonpModule} from '@angular/common/http';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  peliculas:any[]=[];
  sinresultados=false;
  private apiKey:string="962d7de955349d532cdce27d85540eab";
  private urlMoviedb:string="https://api.themoviedb.org/3";

  constructor(private jsonp:HttpClientJsonpModule,
              private http:HttpClient,
            ) { }

  getPopulares(){
    let url=`${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.get(url);
                //.pipe(map( (res: any) => res.results));
                            
  }
  getCartelera(){
    //para establecer las fechas en las carteleras
    let desde=new Date();
    let hasta=new Date();
    hasta.setDate(hasta.getDate()+7);//le suo 7 dias a la fecha actual
    
    let desdeStr=`${desde.getFullYear()}-${(desde.getMonth()+1).toString().padStart(2, "0")}-${desde.getDate()}`;//para transformar la fecha a formato anio-mes-dia
    //le sumamos un mes al dia porque por defecto es 0
    let hastaStr=`${hasta.getFullYear()}-${(hasta.getMonth()+1).toString().padStart(2, "0")}-${hasta.getDate()}`;
    //.toString().padStart(2, "0") es para que me devuleva el mes con dos digitos
    
    let url=`${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apiKey}&languaje=es`;
    return this.http.get(url).pipe(map( (res: any) => res.results));
  }

  getPopularesNinos(){
    let url=`${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&languaje=es`;
    return this.http.get(url).pipe(map((res:any)=>{ //res de tipo any para poder obtener directamente
                                                    //el array de resultados
                            return res.results;
                        }));
  }
  buscarPelicula(texto:string){
    let url=`${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&languaje=es`;
    return this.http.get(url).pipe(map((res:any)=>{

      if(this.peliculas.length==0){
        this.sinresultados=true;
      }
      
      this.peliculas=res.results;
      console.log(this.peliculas);
      //la varibale peliculas va a tener todas las peliculas encontradas al realizar la busqueda, 
      //para cundo le de atras se puedan visualizar ahi
      return res.results;
    }));
  }

  getPelicula(id:string){
    let url=`${this.urlMoviedb}/movie/${id}?api_key=${this.apiKey}&languaje=es`;
    return this.http.get(url);
  }
}
