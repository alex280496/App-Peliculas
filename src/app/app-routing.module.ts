import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'buscar',component:SearchComponent},
  {path:'buscar/:id',component:SearchComponent},
  {path:'pelicula/:texto',component:PeliculaComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
