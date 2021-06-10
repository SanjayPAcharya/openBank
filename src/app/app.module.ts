import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';

import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { HeaderComponent } from 'src/components/header/header.component';
import { SlideOneComponent } from 'src/components/slide-one/slide-one.component';
import { SlideTwoComponent } from 'src/components/slide-two/slide-two.component';
import { InteractiveCalculatorComponent } from 'src/components/interactive-calculator/interactive-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideOneComponent,
    SlideTwoComponent,
    InteractiveCalculatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
    SliderModule,
    FormsModule,
    DropdownModule,
    InputSwitchModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
