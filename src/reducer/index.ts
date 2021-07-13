import { ActionReducerMap, createSelector } from '@ngrx/store'
import { userReducer, UserReducerState,getUsers } from './user.reducer'
export interface RootReducerState{
    users :  UserReducerState
}


export  const  rootReducer : ActionReducerMap<RootReducerState> = {
    users : userReducer
}


export const getUserState = (state: RootReducerState) => state.users;

export const getUserData = createSelector(getUserState,getUsers) 