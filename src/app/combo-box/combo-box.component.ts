import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cb-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent implements OnInit {

  private defaultSelected;
  private selection: number;
  items = [
    {id: 1, name: 'Male'},
    {id: 2, name: 'Female'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
