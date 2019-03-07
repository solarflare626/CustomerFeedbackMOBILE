import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { ComponentsModule } from '../../components/components.module';
const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [{
      path: 'stores',
      loadChildren: '../tabs/stores/stores.module#StoresPageModule'
    },
    { path: 'menu', loadChildren: '../tabs/menu/menu.module#MenuPageModule' },
    { path: 'reviews', loadChildren: '../tabs/reviews/reviews.module#ReviewsPageModule' },
  ]
  },
  {
    path: '',
    redirectTo: '/customer/home/tabs/stores',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HomePage],
})
export class HomePageModule {}
