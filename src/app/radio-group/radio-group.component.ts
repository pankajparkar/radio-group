import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cb-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.css']
})
export class RadioGroupComponent implements OnInit {

  // private selectedValue;
  @Input() items;
  @Input() selectedValue = new FormControl();

  constructor() { }

  select (value) {
  }

  ngOnInit() {
  }

}
