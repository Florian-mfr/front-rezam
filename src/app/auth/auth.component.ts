import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../core/models/User';
import { AuthService } from '../core/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {
  user: User = { username: '', password: '' }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit (): void {
  }

  submit () {
    this.authService.login(this.user)
      .subscribe(() => this.router.navigate(['/']))
  }

}
