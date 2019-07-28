import { Component, OnInit, Input, Provider, forwardRef } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const DEFAUL_CONTROLVALUEACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  multi: true,
  useExisting: forwardRef(() => RadioGroupComponent)
}

@Component({
  selector: 'cb-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.css'],
  providers: [DEFAUL_CONTROLVALUEACCESSOR]
})
export class RadioGroupComponent implements OnInit, ControlValueAccessor {

  onChange = (_) => {}
  onTouched = () => {}

  writeValue(value): void {
    if (value) {
      this.onChange(value)
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // private selectedValue;
  @Input() items;
  @Input() selectedValue = new FormControl();

  constructor() { }

  select (value) {
    this.onChange(value);
    this.onTouched();
  }

  ngOnInit() {
  }

}
