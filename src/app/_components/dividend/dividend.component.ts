import { Component, OnInit } from '@angular/core';
import {PalmaresDividend} from '../../_models/palmares-dividend';
import {StockService} from '../../_services/stock.service';

@Component({
  selector: 'app-dividend',
  templateUrl: './dividend.component.html',
  styleUrls: ['./dividend.component.scss']
})
export class DividendComponent implements OnInit {

  constructor(
    private stocksService: StockService
  ) { }

  palmaresDividend: PalmaresDividend[] = [];

  async ngOnInit() {
    this.palmaresDividend = [];
    const tmp = await this.stocksService.getPalmaresDividend(1).toPromise();
    tmp.forEach((d, idx) => {
      if (!d['Var.']) {
        return;
      }
      d.class = d['Var.'].includes('-') ? 'red' : 'green';
      this.palmaresDividend.push(d);
    });
  }

  getKeys(d: PalmaresDividend) {
    return Object.keys(d).filter(k => !['class', 'Libellé'].includes(k));
  }

}
