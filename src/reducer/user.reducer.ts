
import {  loggedIn_request, loggedIn_success, loggedOut_success } from "../actions/user.action";
import { User } from "../user.model";
import { Action } from './../actions/index';

export interface UserReducerState{
    user: User[]
}

const initialState : UserReducerState = {
    user : []
}

export function userReducer(state = initialState, action: Action)  {
    switch (action.type) {
        case loggedIn_request : {
            return {...state }
        }

        case loggedIn_success : {
            const data = action.payload.data;
            return {...state , user : data}
        }

        case loggedOut_success : {
            const data = action.payload.data;
            return {...state , user : data}
        }

        default :{
            return state;
        }

    }
}

export const getUsers = (state : UserReducerState ) => state.user;