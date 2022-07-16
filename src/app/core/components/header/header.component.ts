import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  @Input() routeName: string = ''

  constructor(public router: Router, private authService: AuthService) {}

  protected logout() {
    this.authService.logout()
  }
}
