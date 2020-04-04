import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from './film';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FetchMoviesService {
  constructor(private http: HttpClient) { 

  }
  
  fetchMovies() {
    return this.http.get<Film[]>('https://ghibliapi.herokuapp.com/films');
  }
}