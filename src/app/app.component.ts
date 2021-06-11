import { Component, ElementRef, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'openBank';
  _isScrolled: boolean = false;

  @ViewChild('slideOne', {static: true}) slideOne: any;
  @ViewChild('slideTwo', {static: false}) slideTwo: any;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }  
  
  onScroll(e: any) {
    this._isScrolled = e.target.scrollTop >= 50;
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
