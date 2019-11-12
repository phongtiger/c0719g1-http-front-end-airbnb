import { Component, OnInit } from '@angular/core';
import {ISignIn} from '../interface/i-sign-in';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SignInService} from '../service/sign-in.service';
import {IRole} from '../interface/i-role';
import {RoleService} from '../service/role.service';

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
  accList: ISignIn[];
  roles: IRole[];
  registerForm: FormGroup;
  message: string;
  constructor(private signInService: SignInService,
              private roleService: RoleService,
              private fb: FormBuilder) {
    this.roleService.getRole().subscribe( next => {
      this.roles = next;
    });
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: '',
    }, { validator: comparePassword});
    this.registerForm.patchValue({
      email: 'info@example.com'
    });
  }
  onSubmit() {
    if (this.registerForm.valid) {
      const {value} = this.registerForm;
      console.log('da ok');
      this.message = 'Tao thanh cong';
      this.signInService.createAcc(value)
        .subscribe(next => {
          this.accList.unshift(next);
          this.registerForm.reset({
            email: '',
            password: '',
          });
        }, error => console.log(error));
    }
  }

}
