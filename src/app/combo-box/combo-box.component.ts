import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cb-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent implements OnInit {

  private defaultSelected;
  private selection: number;
  @Input() items;

  constructor() { }

  ngOnInit() {
  }

}
