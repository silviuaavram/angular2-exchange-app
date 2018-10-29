import { Injectable } from '@angular/core';
import { BankExchangeEntry } from '../components/exchange-main/exchange-main.component'

@Injectable({
  providedIn: 'root'
})
export class BankService {

  url = 'https://api.exchangeratesapi.io'

  constructor() { }

  public getRates(currency: string, date: string, callbackFn: (b: BankExchangeEntry) => void): void {
    fetch(`${this.url}/${date}?base=${currency}`)
    .then(response => response.json())
    .then(result => {
      callbackFn(result)
    })
  }
}
