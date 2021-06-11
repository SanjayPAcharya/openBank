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

  selectedDuration: any = {name: "3 Months", code: 3};

  duration: any[] = [
      {name: '1 Month', code: 1},
      {name: '3 Months', code: 3},
      {name: '6 Months', code: 6},
      {name: '12 Months', code: 12},
      {name: '48 Months', code: 48}
  ];

  eLoan: any;

  checked2: any;

  constructor() {
    this.val1 = 45;
    this.val2 = 12;
    this.rangeValues = [0,this.val1]
  }

  ngOnInit(): void {
    // setInterval( ()=>{
    //   console.log(this.selectedDuration)
    // }, 1000)
  }

}
