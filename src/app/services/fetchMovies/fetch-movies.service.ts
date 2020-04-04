import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http'; v1
import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { Film } from './film';
// import { Observable } from 'rxjs'; - v1
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FetchMoviesService {
  private http;
  constructor() { 
    this.http = axios;
  }
  
  fetchMovies() {
    // return this.http.get<Film[]>('https://ghibliapi.herokuapp.com/films'); - v1
    const observable = from(
    this.http.get('https://ghibliapi.herokuapp.com/films')
      .then(res => {
        return res.data
      }))
    return observable;
  }
}