import { Component, OnInit } from '@angular/core';
import {ISignIn} from '../interface/i-sign-in';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SignInService} from '../service/sign-in.service';
import {ProfileService} from '../service/profile.service';
import {IProfile} from '../interface/i-profile';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  acc: IProfile;
  data: FormGroup;
  token: string;
  message: string;
  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private profileService: ProfileService,
              private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.data = this.fb.group({
      token: '',
      name: '',
      phone: '',
      address: '',
      avatar: ''
    })
    ;
    const token = this.tokenStorage.getToken();
    this.profileService.getOneAccToken().subscribe(
      next => {
        this.acc = next;
        this.data.patchValue(this.acc);
      },
      error => {
        this.acc = null;
      }
    );
  }
  editMember() {
    this.profileService.updateAcc(this.data.value).subscribe(next => {
      this.message = 'Update success';
    });
  }
}
