import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from '../reducer';



describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        StoreModule.forRoot(rootReducer, {})

      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngrx'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('NgRx');
  });

  it(`should have valid email`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.form.controls.email.setValue('mukul@ibm.com')
    expect(app.form.controls.email.value).toContain('@');
  });

  it(`should have valid login form`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.form.controls.email.setValue('mukul@ibm.com');
    app.form.controls.password.setValue('Test@123');
    expect(app.form.valid).toBeTruthy();
    app.login();
    
  });

  it(`should have run ngoninit`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
  });

  it(`should have show error when form is invalid`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.form.controls.email.setValue(null);
    app.form.controls.password.setValue(null);
    app.login();
    expect(app.signinData['errors']).toEqual('Please enter a valid user name and password to login.')
  });

  it(`should remove store data after logout`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.logout();
  });







});
