import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'cb-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userProfile: FormGroup;
  gender = [
    'Male', 'Female'
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userProfile = this.fb.group({
      userName: '',
      firstName: '',
      lastName: '',
      email: ''
    })
  }

}
