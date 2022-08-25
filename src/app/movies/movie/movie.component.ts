import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { SearcherService } from 'src/app/services/searcher.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private searcher: SearcherService) { }

  movie: Movie = new Movie;

  async ngOnInit() {
    try{
      const req: any = await this.searcher.getMovie(this.activatedRoute.snapshot.params['id'])
      if(req.id){
        console.log(req);
        this.movie = req;
      }
    }catch(e){
      console.log(e);
    }
  }

}
