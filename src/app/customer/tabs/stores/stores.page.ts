import { Component, OnInit } from '@angular/core';

import { ScrollHideConfig } from '../../../directives/scroll-hide.directive';
@Component({
  selector: 'app-stores',
  templateUrl: './stores.page.html',
  styleUrls: ['./stores.page.scss'],
})
export class StoresPage implements OnInit {
  footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 59 };
    
  tests = [1,2,3,4,5];
  constructor() { }

  ngOnInit() {
  }

}
