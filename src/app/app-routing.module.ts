import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LibraryComponent } from './library/library.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: "", redirectTo: "/home-page", pathMatch: "full"},
  {path: "home-page", component: HomePageComponent},
  {path: "library", component: LibraryComponent, children: [
  {path: ":path", component: GameListComponent},
  {path: ":path/game-details/:id", component: GameDetailsComponent}
  ]},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
