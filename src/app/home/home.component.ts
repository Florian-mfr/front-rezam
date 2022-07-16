import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  routeName: string = ''

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routeName = this.router.url
  }
}
