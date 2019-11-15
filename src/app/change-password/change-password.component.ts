import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PassService} from '../service/pass.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IPass} from '../interface/i-pass';


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
  message: string;
  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private passService: PassService, ) { }

  ngOnInit() {
    this.passForm = this.fb.group({
      id: '',
      pass: ['', [Validators.required, Validators.minLength(6)]],
      oldPass: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    })
    ;
    const id = +this.route.snapshot.paramMap.get('id');
    this.passService.getOneAcc(id).subscribe(
      next => {
        this.acc = next;
        this.passForm.patchValue(this.acc);
      },
      error => {
        this.acc = null;
      }
    );
  }
  editMember() {
    this.passService.updateAcc(this.passForm.value).subscribe(next => {
      this.message = 'Update success';
    });
  }
}
