import { Component, OnInit } from '@angular/core';
import { AssetService } from '../../services/asset.service';

import { Asset } from '../../models/Asset';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {
  assets:Asset[];
  lastSortedByField:string;
  ascendingOrder:boolean;

  constructor(private assetService:AssetService) { 
    
  }

  ngOnInit(): void {
    this.assets = this.assetService.getAssets();
  }

  onSortByField(field:string) {
    if(this.lastSortedByField === field) {
      this.ascendingOrder = !this.ascendingOrder;
    }
    else {
      this.lastSortedByField = field;
      this.ascendingOrder = true;
    }

    if(this.ascendingOrder) {
      this.assets = this.assets.sort((a, b) => {
        if (a[field] < b[field])
          return -1;
        if (a[field] > b[field])
          return 1;
        return 0;
      });
    } else {
      this.assets = this.assets.sort((a, b) => {
        if (a[field] < b[field])
          return 1;
        if (a[field] > b[field])
          return -1;
        return 0;
      });
    }

  }

}
