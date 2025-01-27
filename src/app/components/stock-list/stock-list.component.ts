import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';
import { StockItem } from 'src/app/models/stock-item.model';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  stockList: StockItem[] = [];
  selectedStock: StockItem;

  constructor(private stockService: StockService) {
    this.selectedStock = null;
    this.stockService.getStockList().subscribe( arr => this.stockList = arr);
  }

  ngOnInit() { }

  onStockItemClick(stock: StockItem) {
    this.selectedStock = stock;
    console.log(stock);
  }

}
