import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PassService} from '../service/pass.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IPass} from '../interface/i-pass';
import {TokenStorageService} from '../auth/token-storage.service';
import {ProfileService} from '../service/profile.service';


function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  acc: IPass;
  passForm: FormGroup;
  token: string;
  message: string;
  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private profileService: ProfileService,
              private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.passForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
    ;
    this.token = this.tokenStorage.getToken();
  }
  editMember() {
    this.profileService.updatePass(this.passForm.value).subscribe(next => {
      this.message = 'Update success';
    });
  }

  logout() { this.tokenStorage.signOut(); this.message = 'Bạn đã đăng xuất';
  }
}
