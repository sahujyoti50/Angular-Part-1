import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='Angular forms';
  loginForm = new FormGroup({
    user: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
  })

  loginUser() {
    console.log(this.loginForm.value);
  }
  get user() {
    return this.loginForm.get('user');
  }
  get password() {
    return this.loginForm.get('password');
  }

}