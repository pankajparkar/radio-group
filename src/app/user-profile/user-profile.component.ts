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
    {id: 1, name: 'Male'},
    {id: 2, name: 'Female'}
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
