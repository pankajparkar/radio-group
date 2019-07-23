import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cb-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent implements OnInit {

  private defaultSelected = 0
  private selection: number;
  items = [0,1,2]

  constructor() { }

  ngOnInit() {
  }

}
