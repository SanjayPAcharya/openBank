import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interactive-calculator',
  templateUrl: './interactive-calculator.component.html',
  styleUrls: ['./interactive-calculator.component.scss']
})
export class InteractiveCalculatorComponent implements OnInit {

  val1: any;
  val2: any;
  rangeValues: any;


  selectedDuration: any = '6m';

  duration: any[] = [
      {name: '1 Month', code: '1m'},
      {name: '3 Months', code: '3m'},
      {name: '6 Months', code: '6m'},
      {name: '12 Months', code: '12m'},
      {name: '48 Months', code: '48m'}
  ];

  property: any;

  checked2: any;

  constructor() {
    this.val1 = 45;
    this.val2 = 12;
    this.rangeValues = [0,this.val1]
  }

  ngOnInit(): void {
  }

}
