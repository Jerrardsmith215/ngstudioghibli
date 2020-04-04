import { Component, Input ,OnInit } from '@angular/core';
import { Film } from '../services/fetchMovies/film';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() film: Film;
}
