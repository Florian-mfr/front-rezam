// import { Action } from "@ngrx/store"
import { User } from "src/app/core/models/User"

// export const SET_CURRENT_USER = '[CURRENT_USER] Set'
// export const REMOVE_CURRENT_USER = '[CURRENT_USER] Remove'

// export class SetCurrentUser implements Action {
//   readonly type = SET_CURRENT_USER

//   constructor (public payload: User) {}
// }
// export class RemoveCurrentUser implements Action {
//   readonly type = REMOVE_CURRENT_USER

//   constructor () {}
// }

// export type Actions = SetCurrentUser | RemoveCurrentUser

import { createAction, props } from '@ngrx/store';

export const setCurrentUser = createAction('[CURRENT_USER] Set', props<{ user: User }>())
export const removeCurrentUser = createAction('[CURRENT_USER] Remove')
export const getCurrentUser = createAction('[CURRENT_USER] Get')