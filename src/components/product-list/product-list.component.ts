import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() products: any;

  @Output('product') productEmitter = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  selectProduct(product: any) {
    this.productEmitter.emit(product);
  }
}
