import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'number-box';
  public min: any;
  public max: any;
  public step: any;
  public min0 = -1000;
  public max0 = 1000;
  public step0 = 1;

  public value;

  onValueChange(value: any) {
    this.value = value;
  }
}
