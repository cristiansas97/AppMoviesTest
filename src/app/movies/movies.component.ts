import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { SearcherService } from '../services/searcher.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private searcher: SearcherService) { }
  
  movies: Movie[] = [];

  ngOnInit(): void {
  }

  async onMovieSelected(movie: string){
    try{
      const req: any = await this.searcher.getMovies(movie);
      if(req.total_results>0) this.movies = req.results;
      console.log(req.results);
    }catch(e){
      console.log(e);
    }

  }

}
