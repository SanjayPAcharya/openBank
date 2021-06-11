import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interactive-calculator',
  templateUrl: './interactive-calculator.component.html',
  styleUrls: ['./interactive-calculator.component.scss']
})
export class InteractiveCalculatorComponent implements OnInit {

  salary: any;
  expense: any;

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
    this.salary = 15000;
    this.expense = 5000;
  }

  ngOnInit(): void { }

  // expense will reset to 0 if salary becomes less than expense
  baseChange(e: any) {
    if (e.value < this.expense) {
      this.expense = 0;
    }
  }

}
