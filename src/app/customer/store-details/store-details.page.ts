import { Component, OnInit} from '@angular/core';
import { Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.page.html',
  styleUrls: ['./store-details.page.scss'],
})
export class StoreDetailsPage implements OnInit {
  public stall_id;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.stall_id= this.route.snapshot.paramMap.get("id");
  }

}
