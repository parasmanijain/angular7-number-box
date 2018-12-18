import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-number-box',
  templateUrl: './number-box.component.html',
  styleUrls: ['./number-box.component.css']
})
export class NumberBoxComponent implements OnInit {

  @Input() min;
  @Input() max;


  constructor() { }

  ngOnInit() {
    if (this.min === undefined) {
      this.min = -1000;
    }
    if (this.max === undefined) {
      this.max = 1000;
    }
  }

  updateValue(value, flag) {
    if (parseInt(value, 10) >= this.max) {
      value = this.max;
    }
    if (parseInt(value, 10) <= this.min) {
      value = this.min;
    }
    if (flag && parseInt(value, 10) < this.max) {
      value++;
    }
    if (!flag && parseInt(value, 10) > this.min) {
      value--;
    }
    return value;
  }
}
