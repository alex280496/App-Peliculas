import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: []
})
export class GaleriaComponent implements OnInit {

  @Input('peliculas') peliculas;
  // 'peliculas'es al variable que viene desde el componente padre que es el home
  //y peliculas del final es la variable donde recibo la informacion y puedo mostrarla en la vista
  @Input('titulo')titulo;
  constructor() { }

  ngOnInit() {
  }

}
