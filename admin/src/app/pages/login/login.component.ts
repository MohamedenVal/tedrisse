import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/gaurd/auth.guard';
import { AuthService } from 'src/app/services/auth.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  error = false;
  message = "Email or password is wrong!";

  constructor(
    private formBuilder: FormBuilder,
    private authGuard: AuthGuard,
    private authService: AuthService,
    private router: Router,
    private storage: LocalstorageService,
  ) { }

  ngOnInit(): void {
    if (this.authGuard.canActivate()) {
      this.router.navigate(['/']);
    }

    this._initLoginForm();
  }

  onSubmmit() {
    this.submitted = true;
    if (this.form.invalid) return;

    this.authService
      .login(this.loginForm['email'].value, this.loginForm['password'].value)
        .subscribe(
          (user) => {
            this.error = false;
            this.storage.setToken(user.token);
            this.router.navigate(['/']);
          },
          (err) => {
            this.message = err.error.Messgae;
            this.error = true;

          }
        )
  }

  private _initLoginForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }

  get loginForm() {
    return this.form.controls;
  }

}
