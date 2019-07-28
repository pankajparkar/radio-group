import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'cb-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {

  userAddress: FormGroup;

  addressTypes = [
    {id: 1, name: 'Current'},
    {id: 2, name: 'Permenant'},
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userAddress = this.fb.group({
      address: '',
      selectedValue: ['', [Validators.required]]
    })
  }

}
