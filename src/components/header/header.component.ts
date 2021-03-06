import { Component, EventEmitter, OnInit, Output, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Input() isScrolled = false;
  @Output('_navigateTo') naviagetTo = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {  }

  scrollToElement(element: any): void {
    this.naviagetTo.emit(element);
  }
}
