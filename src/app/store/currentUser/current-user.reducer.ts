// import { Action } from "@ngrx/store";
import { User } from "src/app/core/models/User";
// import * as CurrentUserActions from "../actions/current-user.actions"


// export function reducer (state: User = initialState, action: CurrentUserActions.Actions) {
//   switch (action.type) {
//     case CurrentUserActions.SET_CURRENT_USER:
//       return state = action.payload
//     case CurrentUserActions.REMOVE_CURRENT_USER:
//       return state = initialState
//     default:
//       return state
//   }
// }

import { Action, createReducer, on } from '@ngrx/store';
import * as CurrentUserActions from './current-user.actions';

export interface CurrentUserState {
  currentUser: User
}
const initialState: CurrentUserState = {
  currentUser: {
    id: '',
    username: '',
    email: '',
    password: '',
    account: '',
    role: ''
  }
}

export const currentUserReducer = createReducer(
  initialState,
  on(CurrentUserActions.getCurrentUser, state => ({ ...state })),
  on(CurrentUserActions.setCurrentUser, (state, { user }) => ({
    currentUser: { id: user.id, username: user.username, email: user.email, password: user.password, account: user.account, role: user.role }
  })),
  on(CurrentUserActions.removeCurrentUser, state => ({
    currentUser: initialState.currentUser
  })),
);