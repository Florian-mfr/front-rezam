import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../core/models/User';
import { AppState } from '../store/app.state';
import { getCurrentUser } from '../store/currentUser/current-user.actions';
import { CurrentUserState } from '../store/currentUser/current-user.reducer';
import { selectCurrentUser, selectUser } from '../store/currentUser/current-user.selectors';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.sass']
})
export class MyAccountComponent implements OnInit {

  protected currentUser$ = this.store.select(selectCurrentUser)

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    // this.store.dispatch(getCurrentUser())
    // console.log(this.store.select(selectCurrentUser))
  }

}
