import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatCardModule} from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from '../reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        StoreModule.forRoot(rootReducer, {}),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
