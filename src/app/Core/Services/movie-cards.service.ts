import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieCard } from 'src/app/Shared/Models/movie-card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieCardsService {

  constructor(private http:HttpClient) { }

  getTopGrossingMovies():Observable<MovieCard[]>{
    return this.http.get<MovieCard[]>('https://movieshopapi.azurewebsites.net/api/Movies/top-grossing');
  }

  getMovieDetails(id:number){

  }
  getMoviesByGenre(genreId:number){

  }
}
