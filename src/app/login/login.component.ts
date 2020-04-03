import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: boolean = true
  userModel = {
    email: '', password: '', password2: ''
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.userModel)
    this.userService.Auth(this.userModel)
  }
}
