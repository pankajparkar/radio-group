import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cb-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent implements OnInit {

  private selectedValue;
  @Input() items;
  @Input() control;

  constructor() { }

  select (value) {
    this.control.setValue(value)
  }

  ngOnInit() {
    this.selectedValue = this.control.value;
    this.control.valueChanges.subscribe(val => this.selectedValue = val);
  }

}
