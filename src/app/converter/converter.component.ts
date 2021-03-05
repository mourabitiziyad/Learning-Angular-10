import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {
  amount = 1;
  from = 'USD';
  to = 'MAD';
  rate = 8.98;

  converter(): number {
    return this.amount * this.rate;
  }

  constructor() {}

  ngOnInit(): void {}
}
