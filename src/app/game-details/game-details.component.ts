import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  public gameDetails
  public gameText = []
  public screenshots = []
  public gameTextTitles = ['Об игре', 'Минимальные требования', 'Еще какой-то текст']
  constructor(private gamesService: GamesService, private route: ActivatedRoute) { }
  public id = this.route.snapshot.paramMap.get("id")
  ngOnInit(): void {
    this.gamesService.getGames()
      .subscribe(data => {
        this.gameDetails = data.find(o => o.id == this.id)
        this.gameText = this.gameDetails.text.split('~')
        this.screenshots = this.gameDetails.screenshots
      })
  }

}
