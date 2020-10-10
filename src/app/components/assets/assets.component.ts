import { Component, OnInit } from '@angular/core';
import { AssetService } from '../../services/asset.service';

import { Asset } from '../../models/Asset';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {
  Math=Math;
  assets:Asset[];
  display_max:number;
  lastSortedByField:string;
  ascendingOrder:boolean;

  constructor(private assetService:AssetService) { 
    
  }

  ngOnInit(): void {
    this.display_max = 3;
    this.assets = this.assetService.getAssets();
  }

  getAssets() {
    this.display_max += 3;
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

  setClasses(asset:Asset) {
    let classes = {
      'asset-change': true,
      'float-right': true,
      'increase': asset.dollar_change>0,
      'decrease': asset.dollar_change<0
    }

    return classes;
  }
}
