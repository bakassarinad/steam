import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGames } from './games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private url: string = "assets/data/games.json"
  headers = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
  constructor(private http: HttpClient) { }

  getGames(): Observable<IGames[]> {
    return this.http.get<IGames[]>(this.url)
  }

  create(game): Observable<IGames> {
    return this.http.post<IGames>(this.url, game, this.headers)
  }
}
