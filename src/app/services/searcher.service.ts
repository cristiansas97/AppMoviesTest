import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearcherService {

  constructor(private http: HttpClient) { }

  private url: string = "https://api.themoviedb.org/";
  private apiKey: string = "d8522b83700b533e5514792303246335";

  getMovies(name: string) {
    var movies;
    if(!name){
      movies = lastValueFrom(this.http.get(`${this.url}3/discover/movie?api_key=${this.apiKey}`),{defaultValue:"No se obtuvieron datos"});
    } else {
      movies = lastValueFrom(this.http.get(`${this.url}3/search/movie?api_key=${this.apiKey}&query=${name}`),{defaultValue:"No se obtuvieron datos"});
    }
    return movies;
  }

  getMovie(id: string) {
    const movie = lastValueFrom(this.http.get(`${this.url}3/discover/movie/${id}?api_key=${this.apiKey}`),{defaultValue:"No se obtuvieron datos"});    
    return movie;
  }
}
