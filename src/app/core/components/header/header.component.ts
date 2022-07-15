import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Input() routeName: string = ''

  constructor(
    public router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  protected logout () {
    this.authService.logout()
  }
}
