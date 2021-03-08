import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from '../services/exchange-rates.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {
  amount = 1;
  from = 'USD';
  to = 'CAD';
  rates: { [key: string]: number };

  converter(): number {
    return this.amount * this.rates[this.to];
  }

  show(res: any): void {
    this.rates = res.rates;
    console.log('jamil', this.rates);
  }

  loadRates() {
    this.service
      .getRates(this.from)
      .subscribe((res) => (this.rates = res.rates));
  }

  getAllCurrencies(): string[] {
    return Object.keys(this.rates)
  }

  constructor(private service: ExchangeRatesService) {}

  ngOnInit(): void {
    this.loadRates();
  }
}
