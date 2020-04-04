import { Component, OnInit } from '@angular/core';
import { FetchMoviesService } from '../services/fetchMovies/fetch-movies.service';

const filmz = [
  { title: 'Lovey',
    description: 'desc',
    director: 'dir',
    producer: 'prod',
    release_date: 'date',
    rt_score: 87
  },
  { title: 'Dopey',
  description: 'desc',
  director: 'dir',
  producer: 'prod',
  release_date: 'date',
  rt_score: 87
  },
  { title: 'Kirolas',
  description: 'desc',
  director: 'dir',
  producer: 'prod',
  release_date: 'date',
  rt_score: 87
  }
]

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss'],
})

export class CardGridComponent implements OnInit {
  public films = [];

  constructor(private api: FetchMoviesService) { 
  }

  ngOnInit(): void {
    this.api.fetchMovies()
      .subscribe(data => this.films = data)
  }
}
