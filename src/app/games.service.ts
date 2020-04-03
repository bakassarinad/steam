import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGames } from './games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private url: string = "assets/data/games.json"
  constructor(private http: HttpClient) { }

  getGames(): Observable<IGames[]> {
    return this.http.get<IGames[]>(this.url)
  }
}
