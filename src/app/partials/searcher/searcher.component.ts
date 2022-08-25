import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  constructor() { }

  @Output()
  moviesSelected = new EventEmitter<string>();

  @Input()
  placeholder!: string;

  name: string = "";

  ngOnInit(): void {
  }

  selectMovie(){
    this.moviesSelected.emit(this.name);
  }

}
