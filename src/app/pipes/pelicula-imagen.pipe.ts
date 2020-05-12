import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform(pelicula:any,poster:boolean=false): any { //recibo una pelicula porque necesito trabajr con todo el objeto
    
    let url="http://image.tmdb.org/t/p/w500";

    if(poster){ //es un parametro que envio desde la vista por defecto es falso
      return url+pelicula.poster_path;
    }
    if(pelicula.backdrop_path){
      return url+pelicula.backdrop_path;
    }
    else{
      if(pelicula.poster_path){
        return url+pelicula.poster_path;
      }
      else{
        return "assets/images/no-image.jpg"; //es un path relativo
      }
    }
  }

}
     