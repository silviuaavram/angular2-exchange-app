import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-exchange-form',
  templateUrl: './exchange-form.component.html',
  styleUrls: ['./exchange-form.component.css']
})
export class ExchangeFormComponent {
  @Input() changeRate: (currency: string, date: string) => void
  @Input() currencies: string[]

  currency: string
  date: string

  ngOnInit() {
    this.currency = this.currencies[0]

    const date = new Date()
    this.date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }

  onSubmit() {
    this.changeRate(this.currency, this.date)
  }
}
