import { Injectable } from '@angular/core';
import {HttpClient, HttpClientJsonpModule} from '@angular/common/http';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
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
}
