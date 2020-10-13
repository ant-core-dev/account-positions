import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-asset-header',
  templateUrl: './asset-header.component.html',
  styleUrls: ['./asset-header.component.css']
})
export class AssetHeaderComponent implements OnInit {
  @Input() lastSortedByField:string;
  @Input() ascendingOrder:boolean;
  @Output() onClickSortByField = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  handleOnSortByField(field:string) {
    this.onClickSortByField.emit(field)
  }

}
