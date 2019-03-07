import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'qrscanner', loadChildren: './qrscanner/qrscanner.module#QrscannerPageModule' },
  { path: 'store-details/:id', loadChildren: './store-details/store-details.module#StoreDetailsPageModule' },
  // { path: 'stores', loadChildren: './tabs/stores/stores.module#StoresPageModule' },
  // { path: 'menu', loadChildren: './tabs/menu/menu.module#MenuPageModule' },
  // { path: 'reviews', loadChildren: './tabs/reviews/reviews.module#ReviewsPageModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
