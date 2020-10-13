import { Component, OnInit, Input } from '@angular/core';
import { Asset } from 'src/app/models/Asset';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {
  @Input() assets:Asset[];

  Math=Math;  
  display_max:number;

  constructor() { }

  ngOnInit(): void {
    this.display_max = 3;    
  }

  handleLoadMore() {
    this.display_max += 3;
  }

  setClasses(asset:Asset) {
    let classes = {
      'asset-change': true,
      'ml-auto': true,
      'increase': asset.dollar_change>0,
      'decrease': asset.dollar_change<0,
      'text-secondary': asset.dollar_change==0
    }

    return classes;
  }
}
