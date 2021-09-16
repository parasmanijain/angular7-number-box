import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-number-box',
  templateUrl: './number-box.component.html',
  styleUrls: ['./number-box.component.css']
})
export class NumberBoxComponent implements OnInit {

  @Input() min;
  @Input() max;
  @Input() step;

  @Output() onValueChange:EventEmitter<any> = new EventEmitter();

  public input: number;

  constructor() { }

  ngOnInit() {
    if (this.min === undefined) {
      this.min = -1000;
    }
    if (this.max === undefined) {
      this.max = 1000;
    }
    if (this.step === undefined) {
      this.step = 1;
    }
    if (this.input === undefined) {
      this.input = (parseInt(this.max, 10) + parseInt(this.min, 10)) / 2;
    }
    this.onValueChange.emit(this.input);
  }

  updateValue(value: any, flag: any, step: any) {
    if (value === '') {
      value = 0;
    }
    value = parseInt(value, 10);
    step = parseInt(step, 10);
    this.max = parseInt(this.max, 10);
    this.min = parseInt(this.min, 10);
    if (flag) {
      value = value + step;
    } else {
      value = value - step;
    }
    value = Math.min(this.max, Math.max(this.min, value));
    this.onValueChange.emit(value);
    return value;
  }
}
