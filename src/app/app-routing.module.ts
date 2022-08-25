import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MovieComponent } from './movies/movie/movie.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/details/:id', component: MovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
