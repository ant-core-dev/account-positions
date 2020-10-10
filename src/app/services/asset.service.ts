import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor() { }

  getAssets() {
    return [
      {
        id: 1,
        account_number: '0029',
        name: 'AAA',
        cash_available: 39160334.42,
        dollar_change: -31435.87,
        percent_change: 0.07,
      },
      {
        id: 2,
        account_number: '3810',
        name: 'AAA',
        cash_available: 10050054.07,
        dollar_change: 8916.69,
        percent_change: 0.07
      },
      {
        id: 3,
        account_number: '5200',
        name: 'IRA',
        cash_available: 5763.36,
        dollar_change: -8916.69,
        percent_change: 0.08
      },
      {
        id: 4,
        account_number: '2019',
        name: 'REG',
        cash_available: 13465679.34,
        dollar_change: 0,
        percent_change: 0.00
      },
      {
        id: 5,
        account_number: '1812',
        name: 'AAA',
        cash_available: 2010926.10,
        dollar_change: 38881.63,
        percent_change: 0.21
      },
      {
        id: 6,
        account_number: '0146',
        name: 'IRA',
        cash_available: 15884302.39,
        dollar_change: 7430.83,
        percent_change: 0.03
      }                        
    ]
  }
}
