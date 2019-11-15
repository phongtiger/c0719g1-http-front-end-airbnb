import { Component, OnInit } from '@angular/core';
import {ISignIn} from '../interface/i-sign-in';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SignInService} from '../service/sign-in.service';
import {ProfileService} from '../service/profile.service';
import {IProfile} from '../interface/i-profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  acc: IProfile;
  data: FormGroup;
  message: string;
  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private profileService: ProfileService, ) { }

  ngOnInit() {
    this.data = this.fb.group({
      id: '',
      name: '',
      phone: '',
      address: '',
      avatar: ''
    })
    ;
    const id = +this.route.snapshot.paramMap.get('id');
    this.profileService.getOneAcc(id).subscribe(
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
