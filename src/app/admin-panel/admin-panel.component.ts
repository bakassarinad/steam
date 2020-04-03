import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  gameModel = {
    name: '',
    description: '',
    image: '',
    category: '',
    price: '',
    text: '',
    screenshots: []
    
  }
  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.gameModel)
    this.gamesService.create(this.gameModel)
  }
  

}
