import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from './core/services/auth/jwt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public title = 'front-rezam'

  constructor (
    public router: Router,
    private jwtService: JwtService
  ) {}

  ngOnInit(): void {
    if (this.jwtService.getToken()) this.router.navigate(['/accueil'])
    else this.router.navigate(['/login'])
  }
}
