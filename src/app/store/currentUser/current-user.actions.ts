import { User } from 'src/app/core/models/User'
import { createAction, props } from '@ngrx/store'

export const setCurrentUser = createAction(
  '[CURRENT_USER] Set',
  props<{ user: User }>()
)
export const removeCurrentUser = createAction('[CURRENT_USER] Remove')
export const getCurrentUser = createAction('[CURRENT_USER] Get')
