import { Component, ElementRef, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'openBank';

  @ViewChild('slideOne', {static: true}) slideOne: any;
  @ViewChild('slideTwo', {static: false}) slideTwo: any;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  navigateToSlide(toWhere: any) {
    switch (toWhere) {
      case 'one' : {
        this.slideOne.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
        break;
      }
      case 'two' : {
        this.slideTwo.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
        break;
      }
    }
  }
}
