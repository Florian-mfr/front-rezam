import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CurrentUserState } from './current-user.reducer';

export const selectUser = (state: AppState) => state.currentUser;
export const selectCurrentUser = createSelector(
  selectUser,
  (state: CurrentUserState) => state.currentUser
);