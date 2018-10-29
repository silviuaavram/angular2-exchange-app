import { Component } from '@angular/core';
import { BankService } from '../../services/bank.service'

export interface BankExchangeEntry {
  base: string
  date: string
  rates: { [currency: string]: number }
}

export interface ExchangeEntry extends BankExchangeEntry {
  calculated: Map<string, {
    buy: number
    sell: number
    highlight: boolean
  }>
}

export type CalculatedExchangeRates = Map<string, {
  buy: number
  sell: number
  highlight: boolean
}>

@Component({
  selector: 'app-exchange-main',
  templateUrl: './exchange-main.component.html',
  styleUrls: ['./exchange-main.component.css']
})
export class ExchangeMainComponent {
  currencies = ['EUR', 'USD', 'GBP', 'AUD', 'CAD', 'JPY']
  currentEntry: ExchangeEntry

  constructor(private bankService: BankService) {
    this.currentEntry = { calculated: {} } as any
  }

  changeRate = (currency: string, date: string): void => {
    this.bankService.getRates(currency, date, this.onBankResponse)
  }

  onBankResponse = (bankExchangeEntry: BankExchangeEntry) => {
    const calculatedExchangeRates = this.setBuySellRates(bankExchangeEntry)
    this.currentEntry = { ...bankExchangeEntry, calculated: calculatedExchangeRates }
  }

  setBuySellRates = (currentExchange: BankExchangeEntry): CalculatedExchangeRates => {
    const calculatedRates: CalculatedExchangeRates = new Map()

    Object.entries(currentExchange.rates).forEach(([currency, value]) => {
      const difference = value - value * 95 / 100

      calculatedRates.set(currency, {
        buy: Math.round((value - difference) * 10000) / 10000,
        sell: Math.round((value + difference) * 10000) / 10000,
        highlight: this.currencies.indexOf(currency) > -1
      })
    })

    return calculatedRates
  }
}
