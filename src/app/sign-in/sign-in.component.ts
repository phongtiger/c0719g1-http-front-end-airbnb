import {Component, OnInit} from '@angular/core';
import {ISignIn} from '../interface/i-sign-in';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SignInService} from '../service/sign-in.service';

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  registerForm: FormGroup;
  message: string;
  isSignedUp = false;
  isSignUpFailed = false;
  constructor(private signInService: SignInService,
              private fb: FormBuilder) {
  }
  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: '',
      role: '',
    }, {validator: comparePassword});
    this.registerForm.patchValue({
      email: 'info@example.com'
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const {value} = this.registerForm;
      console.log(value.role);
      switch (value.role) {
        case '2':
          value.role = ['user'];
          break;
        case '3':
          value.role = ['pm'];
          break;
      }
      console.log(value);
      this.signInService.createAcc(value)
        .subscribe(next => {
         console.log(next);
         this.isSignUpFailed = false;
         this.registerForm.reset({
            email: '',
            password: '',
          });
        }, error => {
          this.message = 'Tạo không thành công';
          this.isSignUpFailed = true; });
    }
  }
}
