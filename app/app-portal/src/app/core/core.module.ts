import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, AlertComponent],
  imports: [
    CommonModule
  ], 
  exports: [
    HeaderComponent,
    FooterComponent,
    AlertComponent
  ]
})
export class CoreModule { }
