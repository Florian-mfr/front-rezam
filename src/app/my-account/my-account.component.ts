import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from '../store/app.state'
import { selectCurrentUser } from '../store/currentUser/current-user.selectors'

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.sass'],
})
export class MyAccountComponent {
  protected currentUser$ = this.store.select(selectCurrentUser)

  constructor(private store: Store<AppState>) {}
}
