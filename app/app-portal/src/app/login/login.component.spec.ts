import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login.component';
import { AuthService } from '../shared/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should be able to submit'`, async(() => {
    expect(component.submitted).toEqual(false);
  }));

  it(`should have title as text 'Log in'`, async(() => {
    expect(component.title).toEqual("Log in");
  }));

  it(`form should be invalid with empty input fields`, async(() => {
    component.loginForm.controls['email'].setValue('');
    component.loginForm.controls['password'].setValue('');
    expect(component.loginForm.valid).toBeFalsy();
  }));

  it(`form should be valid with valid input fields`, async(() => {
    component.loginForm.controls['email'].setValue('xxxxx');
    component.loginForm.controls['password'].setValue('hellooo');
    expect(component.loginForm.valid).toBeTruthy();
  }));

  it(`sign in function in auth service is called upon valid email and password`, async(() => {
    const debugElement = fixture.debugElement;
    let  authService = debugElement.injector.get(AuthService);
    let loginSpy = spyOn(authService , 'signIn').and.callThrough();
    let component = fixture.componentInstance;
    component.loginForm.controls['email'].setValue('bob.tan.2017@sis.smu.edu.sg');
    component.loginForm.controls['password'].setValue('Test1234!');
    component.login();
    fixture.detectChanges();
    expect(loginSpy).toHaveBeenCalled();
  }));
})
