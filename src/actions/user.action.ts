import { User } from "src/user.model";

export const loggedIn_request  = 'user_logged_in_request';
export const loggedIn_success  = 'user_logged_in_success';
export const loggedOut_success  = 'user_logged_out';

export class userLoggedInAction {
    readonly type  =  loggedIn_request;
}

export class userLoggedInSuccessAction {
    readonly type  =  loggedIn_success;

    constructor(public payload? : {data : User[]}){}
}

export class userLoggedOutSuccessAction {
    readonly type  =  loggedOut_success;

    constructor(public payload? : {data : User[]}){}
}