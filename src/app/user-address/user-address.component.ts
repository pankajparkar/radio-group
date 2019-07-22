import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'cb-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {

  userAddress: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userAddress = this.fb.group({
      address: ''
    })
  }

}
