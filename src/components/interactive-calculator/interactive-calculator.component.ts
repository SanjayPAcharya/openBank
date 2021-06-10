import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interactive-calculator',
  templateUrl: './interactive-calculator.component.html',
  styleUrls: ['./interactive-calculator.component.scss']
})
export class InteractiveCalculatorComponent implements OnInit {

  val1: any;

  selectedState: any = null;

  states: any[] = [
      {name: 'Arizona', code: 'Arizona'},
      {name: 'California', value: 'California'},
      {name: 'Florida', code: 'Florida'},
      {name: 'Ohio', code: 'Ohio'},
      {name: 'Washington', code: 'Washington'}
  ];

  property: any;

  checked2: any;

  constructor() {
    this.val1 = 0;
  }

  ngOnInit(): void {
  }

}
