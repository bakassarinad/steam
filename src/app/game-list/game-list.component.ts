import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  public games = []
  public title: string
  constructor(private gamesService: GamesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.gamesService.getGames()
        .subscribe(data => {
          this.games = data.filter(o => o.category == params.path)
          this.title = params.path
        })
    });
  }

  gameDetails(path, id) {
    this.router.navigate(['/library/' + path + '/game-details/' + id])
    // console.log('/library/' + path + '/game-details/' + id)
  }

}
