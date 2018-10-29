import { Component, Input } from '@angular/core';

import { CalculatedExchangeRates } from '../exchange-main/exchange-main.component'

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.css']
})
export class ExchangeRatesComponent {
  @Input() rates: CalculatedExchangeRates

  private sort: boolean
  sortedCurrencies: string[]

  onCurrencyClick = () => {
    this.sort = !(!!this.sort)
    this.performSort()
  }

  ngOnChanges() {
    this.performSort()
  }

  private performSort() {
    if (!this.rates.size) {
      return
    }

    if (this.sort === undefined) {
      this.sortedCurrencies = Array.from(this.rates.keys())
    } else if (this.sort) {
      this.sortedCurrencies = Array.from(this.rates.keys()).sort()
    } else {
      this.sortedCurrencies = Array.from(this.rates.keys()).sort().reverse()
    }
  }
}