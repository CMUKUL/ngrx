import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import { getUserData, RootReducerState } from '../reducer';
import { userLoggedInAction,userLoggedInSuccessAction, userLoggedOutSuccessAction } from '../actions/user.action';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NgRx';
  form: FormGroup;
  //PASSWORD_REGEX = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\.\,\\\;\'\"])(?=.{8,})");
  EMAIL_REGEXP = /^[\-_a-zA-Z0-9 ]+(\.[\-_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/;
  signinData :any;
  isLoggedIn:boolean = false;
  constructor(
      private fb:FormBuilder,
      private router:Router,
      private store: Store<RootReducerState>,
      ) {
        this.signinData = {
          errors: null
      };
      this.form = fb.group({
          email: [null, Validators.compose([Validators.required,Validators.pattern(this.EMAIL_REGEXP)])],
          password: [null,Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(20)])]
      });

  }

  ngOnInit() {

    this.form.controls.email.valueChanges.subscribe(res=> {
      this.signinData['errors'] = null;
    });
    this.form.controls.password.valueChanges.subscribe(res=> {
      this.signinData['errors'] = null;

    })

  }

  login() {

    //if(this.form.invalid || this.form.value.password.length < 6 || this.form.value.password.length > 20){
      if(this.form.invalid){
  
      this.isLoggedIn = false;
      this.signinData['errors'] = "Please enter a valid user name and password to login.";
    }else{
      this.signinData['errors'] = null;
      this.isLoggedIn = true;
      this.store.dispatch( new userLoggedInAction());
      setTimeout(()=>{
        this.store.dispatch( new userLoggedInSuccessAction({data:[{id:'1',email:this.form.value.email}]}))
      
        this.store.select(getUserData).subscribe(data => {
          console.log("data",data)
        })
      },4000);

  
    }
  }
  logout(){
    this.store.dispatch( new userLoggedOutSuccessAction({data:[]}))
    this.signinData['errors'] = null;
    this.isLoggedIn = false;
  }

}

