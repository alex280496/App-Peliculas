import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'buscar',component:SearchComponent},
  {path:'buscar/:texto',component:SearchComponent},
  {path:'pelicula/:id/:pag',component:PeliculaComponent},
  //pelicula/:id:pag , es para saber el id de la pelicula y la pagina en la cual fue llamada la pelicula
  //es una ruta opcional
  {path:'pelicula/:id/:pag/:busqueda',component:PeliculaComponent},//es una ruta opcional
  {path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
