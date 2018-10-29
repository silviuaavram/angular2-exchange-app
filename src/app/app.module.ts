import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './components/app/app.component'
import { ExchangeFormComponent } from './components/exchange-form/exchange-form.component'
import { ExchangeMainComponent } from './components/exchange-main/exchange-main.component'
import { ExchangeRatesComponent } from './components/exchange-rates/exchange-rates.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeFormComponent,
    ExchangeMainComponent,
    ExchangeRatesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
