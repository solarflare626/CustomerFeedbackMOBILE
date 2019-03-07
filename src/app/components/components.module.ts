import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ScrollHideDirective} from '../directives/scroll-hide.directive';
@NgModule({
  declarations: [CustomerHeaderComponent,ScrollHideDirective],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  exports: [CustomerHeaderComponent,ScrollHideDirective],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [CustomerHeaderComponent]
})
export class ComponentsModule { }
