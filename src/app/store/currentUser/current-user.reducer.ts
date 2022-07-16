import { User } from 'src/app/core/models/User'
import { createReducer, on } from '@ngrx/store'
import * as CurrentUserActions from './current-user.actions'

export interface CurrentUserState {
  currentUser: User
}
const initialState: CurrentUserState = {
  currentUser: {
    id: null,
    username: '',
    email: '',
    password: '',
    account: '',
    role: '',
  },
}

export const currentUserReducer = createReducer(
  initialState,
  on(CurrentUserActions.getCurrentUser, (state) => ({ ...state })),
  on(CurrentUserActions.setCurrentUser, (state, { user }) => ({
    currentUser: {
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      account: user.account,
      role: user.role,
    },
  })),
  on(CurrentUserActions.removeCurrentUser, () => ({
    currentUser: initialState.currentUser,
  }))
)
